import styled from '@emotion/styled';

export const Heading = styled('h1')`
  background-color: ${props => props.bg};
  color: ${props => props.fg};
`;

export const Subheading = Heading.withComponent('h2');

export const Quote = styled('blockquote')(props => ({
  fontSize: props.size
}));

export const Cite = styled('cite')(
  {
    fontWeight: 100
  },
  props => ({
    fontWeight: props.weight
  })
);

export const Footer = styled('footer')`
  border-top: 1px solid #ccc;
  color: #ccc;
  margin-top: 50px !important;
  padding-top: 20px;
`;