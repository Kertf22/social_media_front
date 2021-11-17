import { Container,FileInfo, Preview } from "./FileCadastroStyle";

import { MdCheckCircle, MdError} from 'react-icons/md';

export default function File({files}){
    return (
        <Container>
            <FileInfo>
                <Preview src={files?.preview ? files?.preview : "https://ufs-project.s3.amazonaws.com/file1635975657699" }/>
            </FileInfo>
        </Container>
    )
}