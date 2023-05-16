import { Button, Space } from "antd";
import React from "react";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";

function FooterContent() {
    return (
        <Space>
            Jakub Popowski{" "}
            <Button icon={<GithubOutlined />} href="https://github.com/junqy" >Github</Button>
            <Button icon={<LinkedinOutlined />} href="https://www.linkedin.com/in/jakub-popowski-0b7916199/" >Linkedin</Button>
        </Space>
    );
}

export default FooterContent;
