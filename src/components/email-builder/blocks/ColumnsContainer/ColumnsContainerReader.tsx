import { ColumnsContainer as BaseColumnsContainer } from 'components/block-columns-container';

import { ReaderBlock } from '../../Reader/core';

import { type ColumnsContainerProps } from './ColumnsContainerPropsSchema';

export default function ColumnsContainerReader({ style, props }: ColumnsContainerProps) {
  const { columns, ...restProps } = props ?? {};
  let cols = undefined;
  if (columns) {
    cols = columns.map((col) => col.childrenIds.map((childId) => <ReaderBlock key={childId} id={childId} />));
  }

  return <BaseColumnsContainer props={restProps} columns={cols} style={style} />;
}
