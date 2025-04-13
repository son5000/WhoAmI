import styles from "@/components/Section/content.module.css"
import { Room } from "./room"
import { ContentList } from "./contentList"
import { useRoomState } from "@/lib/RoomStateContext"
import { Basket } from "./basket";
import { Folder } from "./folder";
import { useBasketState } from "@/lib/BasketStateContext";
import { useFolderState } from "@/lib/FolderStateContext";


export function Content () {

  const { roomState, setRoomState } = useRoomState();
  const { basketState, setBasketState } = useBasketState();
  const { folderState, setFolderState } = useFolderState();

    return (
      <div className={styles.content}>
          {roomState ? <Room /> : null}
          <p>2025-03 Who Am I v1.0.0 All icons by <a href="https://icons8.com" target="_blank" rel="noopener noreferrer">Icons8</a></p>
          <ContentList />
          {basketState ? <Basket /> : null}
          {folderState ? <Folder /> : null}
      </div>
    )
}
