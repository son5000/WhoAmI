import styles from "@/components/Section/contentList.module.css"
import { ThemeButton } from "../Talk/Theme_button"
import { useTalkState } from "@/lib/TalkStateContext";
import { useRoomState } from "@/lib/RoomStateContext";
import { useBasketState } from "@/lib/BasketStateContext";
import { useFolderState } from "@/lib/FolderStateContext";


export function ContentList () {
    const { talkState, setTalkState } = useTalkState();
    const { roomState, setRoomState } = useRoomState();
    const { basketState, setBasketState } = useBasketState();
    const { folderState, setFolderState } = useFolderState();


    function handleClickTalkIcon() {
        return setTalkState(!talkState);
    }

    function handleClickRoomIcon() {
        return setRoomState(!roomState);
    }

    function handleClickBasketIcon() {
        return setBasketState(!basketState);
    }

    function handleClickFolderIcon() {
        return setFolderState(!folderState);
    }

    


    return (
        <div className={styles.container}>
        <ThemeButton />
        <ul className={styles.ul}>
            <li onClick={() => handleClickFolderIcon()}>
                <img src="images/Section/폴더.png" alt="" />
                <span>Project</span>
            </li>
            <li onClick={() => handleClickTalkIcon()}>
                <img src="images/Section/icon_light.png" alt="" />
                <span>Messenger</span>
            </li>
            <li onClick={() => handleClickRoomIcon()}>
                <img src="images/Section/정면머리.png" alt="" />
                <span>다마고찌</span>
            </li>
            <li onClick={() => handleClickBasketIcon()}>
                <img src="images/Section/basket_icon.png" alt="" />
                <span>휴지통</span>
            </li>
        </ul>
        </div>
    )
}