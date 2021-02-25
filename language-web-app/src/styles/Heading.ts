import styled from 'styled-components';
import { Title } from '../components'

// export const Heading = styled.h1<{ active: boolean }>`
// color: ${props => (props.active ? 'red' : 'blue')};
// `;

export const Heading = styled(Title)<{ active: boolean,  }>`
color: ${props => (props.active ? 'red' : 'blue')};
`;

