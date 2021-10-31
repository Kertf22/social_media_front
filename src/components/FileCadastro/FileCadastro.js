import { Container,FileInfo, Preview } from "./FileCadastroStyle";

import { MdCheckCircle, MdError} from 'react-icons/md';

export default function File({files}){
    return (
        <Container>
            <FileInfo>
                <Preview src={files?.preview}/>
                    <div>
                        <strong>{files?.name}</strong>
                    </div>
            </FileInfo>

            <div>

                    {files.uploaded && (<MdCheckCircle size={24} color="#78e5d5"></MdCheckCircle>)}
                    {files.error && (<MdError size={24} color="#e57878"></MdError>)}
            </div>
        </Container>
    )
}