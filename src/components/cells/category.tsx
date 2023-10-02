import tw from 'twin.macro';

interface CategoryCellProps {
  value: string;
  categoryColor: string;
}

export function CategoryCell(props: CategoryCellProps) {
  return (
    <span
      css={[
        tw`overflow-ellipsis block whitespace-nowrap overflow-hidden rounded-full px-2 py-1 -ml-2 -mr-2`,
        props.categoryColor,
      ]}
      title={props.value}
    >
      {props.value}
    </span>
  );
}
