const FILE_TYPES = {
  'WORD': 'word',
  'EXCEL': 'excel',
  'PDF': 'pdf',
  'ARCHIVE': 'archive',
  'IMAGE': 'image',
  'VIDEO': 'video',
  'AUDIO': 'audio',
  'FOLDER': 'folder',
  'FILE': 'file',
}

const MOCK_FILES_LIST = [
  {
    id: "1",
    name: 'file1',
    createdAt: new Date().getTime(),
    type: FILE_TYPES.WORD,
  },
  {
    id: "2",
    name: 'file2',
    createdAt: new Date().getTime(),
    type: FILE_TYPES.EXCEL,
  },
  {
    id: "3",
    name: 'file3',
    createdAt: new Date().getTime(),
    type: FILE_TYPES.VIDEO,
  },
  {
    id: "4",
    name: 'file4',
    createdAt: new Date().getTime(),
    type: FILE_TYPES.AUDIO,
  },
  {
    id: "5",
    name: 'file5',
    createdAt: new Date().getTime(),
    type: FILE_TYPES.FILE,
  },
  {
    id: "6",
    name: 'my folder',
    createdAt: new Date().getTime(),
    type: FILE_TYPES.FOLDER,
  },
]

const ItemTypes = {
  FILE: 'file'
}

export { FILE_TYPES, MOCK_FILES_LIST, ItemTypes };