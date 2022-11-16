import { Table} from 'antd'


const columns = [
  {
    title: 'Nombres',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
    sorter: (a, b) => a.name.length - b.name.length,
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
    ],
    filterSearch: true,
  },
  {
    title: 'Apellidos',
    dataIndex: 'lastname',
    sorter: (a, b) => a.lastname.length - b.lastname.length,
  },
  {
    title: 'Curso',
    dataIndex: 'course',
    sorter: (a, b) => a.age.length - b.age.length,
  },
  {
    title: 'Sexo',
    dataIndex: 'genre',
    sorter: (a, b) => a.age.length - b.age.length,
  },
  {
    title: 'Nivel Educativo',
    dataIndex: 'educationLevel',
    sorter: (a, b) => a.address.length - b.address.length,
  },
];




export const ParticipantList = ({participantList, select}) => {
  
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      select(selectedRows)
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };

  return (
    <>
      <Table
        rowSelection={{...rowSelection}}
        columns={columns}
        dataSource={participantList}
        size="small"
      />
    </>
  )
}
