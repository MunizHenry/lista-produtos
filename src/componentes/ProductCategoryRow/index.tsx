type Props = {
category: string;
};

export default function ProductCategoryRow(props: { category: string }) {
    return (
        <tr>
            <th colSpan={2}>{props.category }
            </th>
        </tr>
    );
}