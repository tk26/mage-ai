import update from 'immutability-helper';
import { XYCoord } from 'react-dnd';
import type { DropTargetMonitor } from 'react-dnd';
import { getElementPositionInContainer } from '../../Canvas/utils/rect';
import { ItemTypeEnum } from '../../Canvas/types';
import { NodeItemType, PortType, RectType, ItemMappingType, PortMappingType, ModelMappingType } from '../../Canvas/interfaces';
import { useRef, useState, startTransition } from 'react';
import { snapToGrid } from '../../Canvas/utils/snapToGrid';
import { ArrowsAdjustingFrameSquare, Check, Group } from '@mana/icons';
import { ZoomPanStateType } from '@mana/hooks/useZoomPan';
import { ClientEventType, EventOperationEnum, EventOperationOptionsType } from '@mana/shared/interfaces';
import { MenuItemType, RenderContextMenuOptions, RemoveContextMenuType, RenderContextMenuType,
} from '@mana/hooks/useContextMenu';
import { ModelManagerType } from './useModelManager';
import { PresentationManagerType } from './usePresentationManager';
import stylesBuilder from '@styles/scss/apps/Canvas/Pipelines/Builder.module.scss';
import { range } from '@utils/array';
import { LayoutManagerType } from './useLayoutManager';

const GRID_SIZE = 40;

type EventManagerProps = {
  activeLevel: React.MutableRefObject<number>;
  canvasRef: React.MutableRefObject<HTMLDivElement>;
  connectionLinesPathRef: PresentationManagerType['connectionLinesPathRef'];
  containerRef: React.MutableRefObject<HTMLDivElement>;
  itemDraggingRef: React.MutableRefObject<NodeItemType | null>;
  itemElementsRef: React.MutableRefObject<Record<string, Record<string, React.RefObject<HTMLDivElement>>>>;
  itemsRef: React.MutableRefObject<ItemMappingType>;
  modelLevelsMapping: LayoutManagerType['modelLevelsMapping'];
  mutateModels: ModelManagerType['mutateModels'];
  portsRef: React.MutableRefObject<PortMappingType>;
  removeContextMenu: RemoveContextMenuType;
  renderConnectionLines: PresentationManagerType['renderConnectionLines'];
  renderContextMenu: RenderContextMenuType;
  setActiveLevel: (level?: number) => void;
  setDragEnabled: (value: boolean) => void;
  setDropEnabled: (value: boolean) => void;
  setZoomPanDisabled: (value: boolean) => void;
  transformState: React.MutableRefObject<ZoomPanStateType>;
};

export type EventManagerType = {
  gridDimensions: React.MutableRefObject<RectType>;
  handleContextMenu: RenderContextMenuType;
  handleDoubleClick: (event: React.MouseEvent) => void;
  handleDragEnd: (event: ClientEventType) => void;
  handleDragStart: (event: ClientEventType) => void;
  handleMouseDown: (event: ClientEventType) => void;
  onDragInit: (node: NodeItemType, monitor: DropTargetMonitor) => void;
  onDragging: (args: {
    clientOffset: XYCoord;
    currentOffset: XYCoord;
    differenceFromInitialOffset: XYCoord;
    initialClientOffset: XYCoord;
    initialOffset: XYCoord;
    itemType: ItemTypeEnum;
    item: NodeItemType;
  }) => void;
  onDropBlock: (item: NodeItemType, monitor: DropTargetMonitor) => void;
  onDropPort: (dragTarget: NodeItemType, dropTarget: NodeItemType) => void;
  resetAfterDrop: () => void;
  setSnapToGridOnDrag: (value: boolean) => void;
  setSnapToGridOnDrop: (value: boolean) => void;
  snapToGridOnDrag: boolean;
  snapToGridOnDrop: boolean;
  submitEventOperation: (event: ClientEventType, opts?: EventOperationOptionsType) => void;
};

export default function useEventManager({
  activeLevel,
  modelLevelsMapping,
  canvasRef,
  connectionLinesPathRef,
  containerRef,
  itemDraggingRef,
  itemElementsRef,
  itemsRef,
  mutateModels,
  portsRef,
  removeContextMenu,
  renderConnectionLines,
  renderContextMenu,
  setActiveLevel,
  setDragEnabled,
  setDropEnabled,
  setZoomPanDisabled,
  transformState,
}: EventManagerProps): EventManagerType {
  const gridDimensions = useRef<RectType>({ height: GRID_SIZE, left: 0, top: 0, width: GRID_SIZE });

  const [snapToGridOnDrag, setSnapToGridOnDrag] = useState(false);
  const [snapToGridOnDrop, setSnapToGridOnDrop] = useState(true);

  function onDragging({
    // clientOffset,
    // currentOffset,
    differenceFromInitialOffset,
    // initialClientOffset,
    // initialOffset,
    item,
    itemType,
  }: {
    clientOffset: XYCoord;
    currentOffset: XYCoord;
    differenceFromInitialOffset: XYCoord;
    initialClientOffset: XYCoord;
    initialOffset: XYCoord;
    itemType: ItemTypeEnum;
    item: NodeItemType;
  }) {
    if (!differenceFromInitialOffset) {
      return;
    }

    const { x, y } = differenceFromInitialOffset;

    function finalCoords(x2: number, y2: number) {
      if (snapToGridOnDrag) {
        const [xs, ys] = snapToGrid(
          { x: x2, y: y2 },
          { height: gridDimensions.current.height, width: gridDimensions.current.width },
        );
        return {
          x: xs,
          y: ys,
        };
      }
      return {
        x: x2,
        y: y2,
      };
    }

    // const modelMapping = {
    //   itemMapping: {},
    //   portMapping: {},
    // };

    if (ItemTypeEnum.BLOCK === itemType) {
      item?.ports?.forEach(({ id: portID }: PortType) => {
        Object.values(connectionLinesPathRef?.current?.[portID] ?? {})?.forEach(
          ({ handleUpdatePath }: { handleUpdatePath: (item: NodeItemType) => void }) => {
            const port1 = portsRef.current?.[portID];

            const port1ElementRect =
              itemElementsRef?.current?.port?.[port1.id]?.current?.getBoundingClientRect();
            let port1Rect = {} as RectType;

            if (port1ElementRect) {
              // Need to adjust this because the element’s ref’s coordinates are relative to the current viewport.
              const absolute = getElementPositionInContainer(
                canvasRef?.current?.getBoundingClientRect(),
                containerRef?.current?.getBoundingClientRect(),
                port1ElementRect,
              );
              port1Rect = {
                height: port1ElementRect.height,
                left: absolute.left,
                top: absolute.top,
                width: port1ElementRect.width,
              };
            }

            port1Rect = {
              ...port1?.rect,
              ...port1Rect,
            };

            const x1 = port1Rect?.left ?? 0;
            const y1 = port1Rect?.top ?? 0;
            const { x: x3, y: y3 } = finalCoords(x1 + x, y1 + y);
            const port2 = update(port1, {
              rect: {
                $merge: {
                  left: x3,
                  top: y3,
                },
              },
            });

            handleUpdatePath(port2);
            // modelMapping.portMapping[port2.id] = port2;
          },
        );
      });
    }

    // const xy = finalCoords(item.rect.left + x, item.rect.top + y);
    // const item2 = update(item, {
    //   rect: {
    //     $merge: {
    //       left: xy.x,
    //       top: xy.y,
    //     },
    //   },
    // });
    // modelMapping.itemMapping[item.id] = item2;
  }

  function handleDoubleClick(event: React.MouseEvent) {
    setActiveLevel();
    renderConnectionLines();
  }

  function submitEventOperation(event: ClientEventType, opts?: EventOperationOptionsType) {
    const { operationType } = event;

    if (EventOperationEnum.CONTEXT_MENU_OPEN === operationType) {
      handleContextMenu(event, ...opts?.args, opts?.kwargs);
    }
  }

  function handleContextMenu(
    event: ClientEventType,
    items?: MenuItemType[],
    opts?: RenderContextMenuOptions,
  ) {
    const { data } = event;

    const menuItems = items ?? [
      {
        Icon: ArrowsAdjustingFrameSquare,
        onClick: (event: ClientEventType) => {
          removeContextMenu(event);
          startTransition(() => {
            setZoomPanDisabled(true);
            setDragEnabled(true);
            setDropEnabled(true);
          });
          containerRef?.current?.classList.add(stylesBuilder.dragging);
        },
        uuid: 'Reposition blocks',
      },
      { divider: true },
      {
        items: [
          {
            onClick: (event: ClientEventType) => {
              event?.preventDefault();
              removeContextMenu(event ?? null);
              transformState?.current?.handleZoom?.current?.((event ?? null) as any, 1);
              startTransition(() => {
                setZoomPanDisabled(false);
              });
            },
            uuid:
              (transformState?.current?.zoom?.current ?? 1) === 1 ? 'Default zoom' : 'Zoom to 100%',
          },
          {
            onClick: (event: ClientEventType) => {
              event?.preventDefault();
              removeContextMenu(event ?? null);
              transformState?.current?.handlePanning?.current?.((event ?? null) as any, {
                x: 0,
                y: 0,
              });
              startTransition(() => {
                setZoomPanDisabled(false);
              });
            },
            uuid: 'Reset view',
          },
          {
            onClick: (event: ClientEventType) => {
              event.preventDefault();
              removeContextMenu(event);
              transformState?.current?.handlePanning?.current?.((event ?? null) as any, {
                xPercent: 0.5,
                yPercent: 0.5,
              });
              startTransition(() => {
                setZoomPanDisabled(false);
              });
            },
            uuid: 'Center view',
          },
        ],
        uuid: 'View controls',
      },
      {
        uuid: 'Groupings',
      },
      ...Object.entries(modelLevelsMapping?.current ?? {}).map(([level, modelMapping]: [number, ModelMappingType]) => ({
          Icon: level === activeLevel?.current ? Check : Group,
          description: () => '...',
          items: Object.values(modelMapping?.itemMapping ?? {}).map((item: NodeItemType) => ({
            // Icon: item.icon,
            // onClick: (event?: ClientEventType) => {
            //   event?.preventDefault();
            //   setActiveLevel(level);
            //   removeContextMenu(event);
            // },
            uuid: item.name,
          })),
          onClick: (event?: ClientEventType) => {
            event?.preventDefault();
            setActiveLevel(level);
            removeContextMenu(event);
          },
          uuid: `Level ${level} grouping`,
        }),
      ),
      { uuid: 'Move' },
      { divider: true },
      { uuid: 'Rename' },
      { divider: true },
      {
        uuid: 'Transfer',
        items: [{ uuid: 'Upload files' }, { uuid: 'Download file' }],
      },
      {
        uuid: 'Copy',
        items: [{ uuid: 'Copy path' }, { uuid: 'Copy relative path' }],
      },
      { divider: true },
      {
        uuid: 'View',
        items: [{ uuid: 'Expand subdirectories' }, { uuid: 'Collapse subdirectories' }],
      },
      { divider: true },
      {
        uuid: 'Projects',
        items: [{ uuid: 'New Mage project' }, { uuid: 'New dbt project' }],
      },
    ];

    if (data?.node) {
    }
    renderContextMenu(event, menuItems, opts);
  }

  function handleDragStart(event: ClientEventType) {
    // setZoomPanDisabled(true);
    // if (!itemDraggingRef.current && ItemTypeEnum.PORT === node.type) {
    //   itemDraggingRef.current = node;
    //   setActiveItems({
    //     [`${node.type}Mapping`]: {
    //       [node.id]: node,
    //     },
    //   });
    // }
  }

  function handleDragEnd(event: ClientEventType) {
    setZoomPanDisabled(false);
    setDragEnabled(false);
    setDropEnabled(false);
    containerRef?.current?.classList.remove(stylesBuilder.dragging);
  }

  function handleMouseDown(event: ClientEventType) {
    const { operationType } = event;

    if (EventOperationEnum.DRAG_START !== operationType) {
      setZoomPanDisabled(false);
      setDragEnabled(false);
      setDropEnabled(false);
    }
  }

  // function handleMouseOver(event: ClientEventType) {
  // }

  // function handleMouseLeave(event: ClientEventType) {
  //   setZoomPanDisabled(false);
  // }

  function onDragInit(node: NodeItemType, monitor: DropTargetMonitor) {
    // We still probably need this when we are draggin lines from port to port.
    // Called only once when it starts
    // updateNodeItems({ [node.id]: node });
    // let rectOrigin = node?.rect;
    // if (
    //   ItemTypeEnum.PORT === node.type &&
    //   itemDraggingRef.current &&
    //   buildPortUUID(node) === buildPortUUID(itemDraggingRef?.current)
    // ) {
    //   rectOrigin = itemDraggingRef?.current?.rect;
    //   console.log('What do we do with this rect?', rectOrigin);
    // } else {
    //   renderConnectionLines();
    // }
  }

  function resetAfterDrop() {
    // itemDraggingRef.current = null;
    // setActiveItems(null);
  }

  function onDropBlock(nodeInit: NodeItemType, monitor: DropTargetMonitor) {
    const node = itemsRef.current[nodeInit.id];

    resetAfterDrop();

    const delta = monitor.getDifferenceFromInitialOffset() as {
      x: number;
      y: number;
    };

    let left = Math.round(node?.rect?.left + delta.x);
    let top = Math.round(node?.rect?.top + delta.y);

    // Prevents the item from being dragged outside the screen but the screen is larger
    // because of the zooming and panning.
    // const screenX = window.innerWidth;
    // const screenY = window.innerHeight;
    // const itemWidth = node?.rect?.width;
    // const itemHeight = node?.rect?.height;

    // if (left < 0) left = 0;
    // if (top < 0) top = 0;
    // if (left + itemWidth > screenX) left = screenX - itemWidth;
    // if (top + itemHeight > screenY) top = screenY - itemHeight;

    let leftOffset = 0;
    let topOffset = 0;
    if (snapToGridOnDrop) {
      // TODO (dangerous): This doesn’t apply to the ports; need to handle that separately.
      const [xSnapped, ySnapped] = snapToGrid(
        {
          x: left,
          y: top,
        },
        { height: gridDimensions.current.height, width: gridDimensions.current.width },
      );
      leftOffset = xSnapped - left;
      topOffset = ySnapped - top;
    }

    left += leftOffset;
    top += topOffset;

    const node2 = update(node, {
      rect: {
        $merge: {
          left,
          top,
        },
      },
    });

    const portsUpdated = {
      ...portsRef.current,
    };
    node2?.ports?.forEach(({ id: portID }: PortType) => {
      const port1 = portsRef.current[portID];
      const port2 = update(port1, {
        rect: {
          $merge: {
            left: left + (port1?.rect?.offset?.left ?? 0),
            top: top + (port1?.rect?.offset?.top ?? 0),
          },
        },
      });

      portsUpdated[port2.id] = port2;
    });

    const elItem = itemElementsRef.current[node.type][node.id].current;
    if (elItem) {
      elItem.style.transform = `translate(${left}px, ${top}px)`;
    }

    const payload = {
      itemMapping: {
        ...itemsRef.current,
        [node2.id]: node2,
      },
      portMapping: portsUpdated,
    };

    // DON’T call renderLayout changes or else the item’s rect is changed.
    mutateModels(payload);
    renderConnectionLines();
  }

  function onDropPort(dragTarget: NodeItemType, dropTarget: NodeItemType) {
    if (ItemTypeEnum.PORT === dragTarget.type && ItemTypeEnum.PORT === dropTarget.type) {
      const node = itemDraggingRef.current;
      console.log('Create a new connection for:', node);
    }

    resetAfterDrop();
  }

  return {
    gridDimensions,
    handleContextMenu,
    handleDoubleClick,
    handleDragEnd,
    handleDragStart,
    handleMouseDown,
    onDragInit,
    onDragging,
    onDropBlock,
    onDropPort,
    resetAfterDrop,
    setSnapToGridOnDrag,
    setSnapToGridOnDrop,
    snapToGridOnDrag,
    snapToGridOnDrop,
    submitEventOperation,
  };
}