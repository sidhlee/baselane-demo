import { useState } from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';
import BarChart from '../../components/BarChart';

const StyledCashFlowChart = styled('div')``;

// https://codesandbox.io/s/lykyr139pq?file=/src/index.js:227-632
const CashFlowChart = () => {
  const generateData = (value, length = 5) =>
    d3.range(length).map((item, index) => ({
      index: index,
      date: index,
      value:
        value === null || value === undefined ? Math.random() * 100 : value,
    }));

  const [data, setData] = useState(generateData());

  return (
    <StyledCashFlowChart>
      <BarChart
        data={data}
        width={700}
        height={200}
        top={20}
        bottom={30}
        left={30}
        right={0}
      />
    </StyledCashFlowChart>
  );
};

export default CashFlowChart;
