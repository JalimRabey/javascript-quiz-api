interface IAttributesTableDataProps {
  attribute: string;
  type: string;
  description: string;
}

interface IAttributesTableProps {
  title: string;
  data: IAttributesTableDataProps[];
}

const AttributesTable: React.FC<IAttributesTableProps> = ({ title, data }) => (
  <details className="mt-4">
    <summary className="font-bold text-textColor cursor-pointer hover:opacity-75 transition-opacity duration-500">
      {title}
    </summary>

    <table className="w-full mt-2 text-textColor border-t border-b">
      <tr className="border-b-2 px-6">
        <th>Attribute</th>
        <th>Type</th>
        <th>Description</th>
      </tr>
      {data.map((item) => (
        <tr key={item.attribute}>
          <td>{item.attribute}</td>
          <td>{item.type}</td>
          <td>{item.description}</td>
        </tr>
      ))}
    </table>
  </details>
);

export default AttributesTable;
