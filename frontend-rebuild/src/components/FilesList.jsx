import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';

import FileItem from "./FileItem";
import SidebarInfo from './SidebarInfo';
import APIService from '../services/API';

import { MOCK_FILES_LIST } from '../constants';

const FilesList = () => {
	const [files, setFiles] = useState([]);
	const [selectedFileId, setSelectedFileId] = useState(null);
	const [isSidebarInfo, setIsSidebarInfo] = useState(false);
	const nodeRef = useRef(null);

	useEffect(() => {
		APIService.getImages().then(res => {
			console.log(res.data);
			setFiles(res.data);
		}).catch(err => {
			console.error(err);
		})
	}, []);

	const selectFile = (id) => {
		console.log('select file', id);
		setSelectedFileId(id);
	}

	const toggleSidebarInfo = () => {
		console.log('toggle sidebar');
		setIsSidebarInfo((state) => !state);
	}

	return (
		<FilesListWrapper>
			<Container>
				<Header>My cloud</Header>
				<ListWrapper>
					{files.map((file, index) => (
						<FileItem
							key={index}
							id={index}
							file={file}
							selected={index === selectedFileId}
							selectFile={selectFile}
							toggleSidebarInfo={toggleSidebarInfo} />
					))}
				</ListWrapper>
			</Container>

			{isSidebarInfo && <SidebarInfo />}
		</FilesListWrapper>
	)
};

export default FilesList;

const FilesListWrapper = styled.div`
	display: flex;
	flex-direction: row;
	background: var(--gray);
`;

const Container = styled.div`
	width: 100%;
	height: 100%;
	padding: 40px;
	background: var(--gray);
`;

const Header = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 700;
  color: var(--black);
`;

const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;