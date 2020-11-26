/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useRef } from "react";
import { PageContainer } from "@ant-design/pro-layout";
import ProTable from "@ant-design/pro-table";
import moment from "moment";

import { restApi } from "api";

const BoardPage = () => {
  const [columnsStateMap, setColumnStateMap] = useState();
  const actionRef = useRef(null);

  const fetchData = async (_params, _sorter, _filter) => {
    const { current, pageSize, createdAt, updatedAt, email } = _params;

    const offset = (current - 1) * pageSize;

    const params = {
      _start: offset,
      _limit: pageSize,
    };

    if (createdAt) {
      params.createdAt_gt = createdAt[0].startOf("date").toDate();
      params.createdAt_lt = createdAt[1].endOf("date").toDate();
    }

    if (updatedAt) {
      params.updatedAt_gt = updatedAt[0].startOf("date").toDate();
      params.updatedAt_lt = updatedAt[1].endOf("date").toDate();
    }

    if (email) {
      params.email_contains = email;
    }

    const { data: total } = await restApi.get("/productions/count", { params });
    const { data } = await restApi.get("/productions", { params });

    return { total, data };
  };

  const columns = [
    {
      dataIndex: "title",
      title: "제목",
    },

    {
      dataIndex: "remark",
      title: "내용",
      ellipsis: true,
    },
    {
      dataIndex: "image",
      title: "이미지",
      render: (data) => {
        return (
          <img
            src={`http://15.164.79.194:1637/${data.url}`}
            style={{ width: "100px" }}
          />
        );
      },
    },
    {
      dataIndex: "author",
      title: "작성자",
      render: (data) => data.username,
    },

    {
      dataIndex: "createdAt",
      title: "작성일",
      render: (data) => moment(data).format("YYYY-MM-DD"),
    },
  ];

  return (
    <PageContainer>
      <ProTable
        style={{ fontSize: "0.7rem", padding: "5px" }}
        headerTitle="일반 게시판"
        columnsStateMap={columnsStateMap}
        onColumnsStateChange={setColumnStateMap}
        actionRef={actionRef}
        rowKey="id"
        request={fetchData}
        columns={columns}
        scroll={{ x: 1024 }}
      />
    </PageContainer>
  );
};

export default BoardPage;
