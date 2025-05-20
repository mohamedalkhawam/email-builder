import { Container as BaseContainer } from 'components/block-container';

import { ReaderBlock } from '../../Reader/core';

import { type ContainerProps } from './ContainerPropsSchema';

export default function ContainerReader({ style, props }: ContainerProps) {
  const childrenIds = props?.childrenIds ?? [];
  return (
    <BaseContainer style={style}>
      {childrenIds.map((childId) => (
        <ReaderBlock key={childId} id={childId} />
      ))}
    </BaseContainer>
  );
}
