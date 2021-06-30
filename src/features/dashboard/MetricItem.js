import { useRef } from 'react';
import styled from 'styled-components';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import ReactTooltip from 'react-tooltip';

const StyledMetricItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5em;
  font-size: 0.9rem;
  .metric-label {
    display: flex;
    align-items: center;
    color: var(--text-muted);
    /* center icon vertically  */
    .label-info {
      cursor: pointer;
      margin-left: 0.5em;
      height: 100%;
      svg {
        height: 100%;
      }
    }
  }

  span.value {
    font-weight: 600;
  }
`;

const MetricItem = ({ metric }) => {
  const { label, info, value } = metric;
  const ref = useRef();
  return (
    <StyledMetricItem>
      <div className="metric-label">
        <span className="label">{label}</span>
        <span ref={ref} data-tip={info} className="label-info">
          <HiOutlineInformationCircle
            role="ing"
            aria-label="information"
            onMouseEnter={() => {
              ReactTooltip.show(ref);
            }}
          />
        </span>
        <ReactTooltip place="top" multiline />
      </div>
      <span className="value">{value}</span>
    </StyledMetricItem>
  );
};

export default MetricItem;
