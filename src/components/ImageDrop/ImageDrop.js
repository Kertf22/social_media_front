import { useState } from "react"
import File from "../FileCadastro/FileCadastro"
import Upload from "../Upload/Upload"
import { Container,ButtonClose,Confirm,ConfirmButton } from "./ImageDropStyle"
import * as AiIcons from "react-icons/ai";

export default function ImageDrop({buttonPress,parentCallBack,reciveFile}){
    const [state,setState] = useState();
    const [onUploade,setOnUpload] = useState(false);

    const handleUpload = file => {
        setState({
            file,
            file:file[0],
            name:file[0].name,
            preview:URL.createObjectURL(file[0]),
            uploaded: false,
            error:false,
        })
    };

    const sendFile = () => {
        reciveFile(state);
        parentCallBack(!buttonPress)
    };

    return (
        <Container buttonPress={buttonPress}>
            <ButtonClose onClick={(e) => parentCallBack(!buttonPress)}>
                <AiIcons.AiOutlineClose height="32px" width="48px" />
            </ButtonClose>
            <h3>Coloque sua foto</h3>
            <Upload onUpload={handleUpload} />
            <h3>Preview</h3>
             <File files={state}/>
            <Confirm>
                <ConfirmButton onClick={sendFile}>Enviar</ConfirmButton>
            </Confirm>
        </Container>
    )
}