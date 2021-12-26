import { Badge, Table, Space , Button , Form , Input , Modal, Descriptions } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteproject, getprojectbyclient, getprojects,  selectauthedproject,  selectdatachanged,  selectproject,  selectprojects, updateproject } from '../features/project/projectsSlice';
import { CloseCircleOutlined , EditOutlined } from '@ant-design/icons';
import { selectauthedtaches, updatetaches } from '../features/tache/tachesSlice';
import { getuser, getusers, selectautheduser, selectdatachenged, selectusers, updateuser } from '../features/users/usersSlice';



const UpdateUsers = () => {
    const dispatch = useDispatch()
    const projects = useSelector(selectprojects)
    const users = useSelector(selectusers)
    const user = useSelector(selectautheduser)
    const datachanged = useSelector(selectdatachenged)
    //const developpers = useSelector(selectdeveloppers)
    useEffect(() => {
    
    }, [datachanged]);
    const columns = [
       {
            title: 'Id User ',
            dataIndex: 'id',
            key: 'id',
            render: (text, record) => (
                <>
                    {record.id}
                </>
            ),
        },
        
        {
            title: 'User Name',
            dataIndex: 'username',
            key: 'username',
            render: (text, record) => (
                <>
                    {record.username}
                </>
            ),
        },
        {
            title: 'email user',
            dataIndex: 'email',
            key: 'email',
            render: (text, record) => (
                <>
                    {record.email}
                </>
            ),
        },
       
        {
            title: ' Phone Number ',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
            render: (text, record) => (
                <>
                    {record.phoneNumber}
                </>
            ),
        },
        {
            title: 'Age user',
            dataIndex: 'age',
            key: 'age',
            render: (text, record) => (
                <>
                    {record.age}
                </>
            ),
        },
        {
            title: 'Description ',
            dataIndex: 'description',
            key: 'description',
            render: (text, record) => (
                <>
                    {record.description}
                </>
            ),
        },
        {
            title: 'Roll user',
            dataIndex: 'roll',
            key: 'roll',
            render: (text, record) => (
                <>
                    {record.roll}
                </>
            ),
        },
        {
            title: 'Update',
            key: 'update',
            render: (text, record) => (
                <Space size="middle">
                    
                   
                    <EditOutlined onClick={() => dispatch(showModal())} style={{ color: 'green', cursor: 'pointer' }} />
                    
                     </Space>
            ),
        },
    
    ];

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const onFinish = (values) => {
        console.log('Success:', values);
  
        let data = {
            roll : values.roll,        
        }
  
        dispatch(getusers(data))
        
        //failed();
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const onFinish2 = (values) => {
        console.log('Success:', values);

        let data = {
            
            email : values.email,
            // username : values.username,
            age : values.age ,
            description : values.description ,
           lastName : values.lastName,
            firstName : values.firstName,
            roll : values.roll ,
            data : values ,
        }
       dispatch(getuser(data))
        dispatch(updateuser(data))
        console.log(data)
        handleCancel()
    };
    const onFinishFailed2 = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

return (
    <div className="container"  >
           <Form
          style={{marginTop:"200px"}}
              name="basic"
              labelCol={{
                  span: 4,
                  offset:3
              }}
              wrapperCol={{
                  span: 15,
              }}
              initialValues={{
                  remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
          >   
              
              <Form.Item
                  label="Roll"
                  name="roll"
                  rules={[
                      {
                          required: true,
                          message: 'Please input your roll !',
                      },
                  ]}
              >
                  <Input />
              </Form.Item>   

              <Form.Item
                  wrapperCol={{
                      offset: 7,
                      span: 15,
                  }}
              >
                  <Button style={{background: "SteelBlue",outline:"none",width:'100%',border:'none'}} type="primary" htmlType="submit">
                      List
                  </Button>
                 </Form.Item>
                
          </Form>         
         
        <h2>Users  </h2>
        <Table columns={columns} dataSource={users} />
        <Modal footer={null} title="Update users" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
               <div>

                    <Form
                        name="basic"
                        style={{marginTop:"20px"}}
                        layout="vertical"
                        initialValues={{ 
                            email : users.email , 
                            
                         }}
                        onFinish={onFinish2}
                        onFinishFailed={onFinishFailed2}
                    >
                        
                        <Form.Item
                           label="email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your email !' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                           label="firstName"
                            name="firstName"
                            rules={[{ required: true, message: 'Please input your firstName !' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                           label="lastName"
                            name="lastName"
                            rules={[{ required: true, message: 'Please input your lastName !' }]}
                        >
                            <Input />
                        </Form.Item>
                         <Form.Item
                           label="phoneNumber"
                            name="phoneNumber"
                            rules={[{ required: true, message: 'Please input your phoneNumber !' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                           label="age"
                            name="age"
                            rules={[{ required: true, message: 'Please input your age !' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                           label="description"
                            name="description"
                            rules={[{ required: true, message: 'Please input your description !' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                           label="roll"
                            name="roll"
                            rules={[{ required: true, message: 'Please input your roll !' }]}
                        >
                            <Input />
                        </Form.Item>
                        
                        <Form.Item >
                            <Button type="primary" htmlType="submit">
                                Update
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>

    </div>
)

}
export default UpdateUsers