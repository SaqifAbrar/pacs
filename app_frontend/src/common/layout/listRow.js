const ListRow = ({ styles = "", text1, text2, text3, text4, text5, text6 }) => {
	return (
		<tr className={`list-row ${styles}-btn`}>
			<td>{text1}</td>
			<td>{text2}</td>
			<td>{text3}</td>
			<td>{text4}</td>
			<td>{text5}</td>
			<td>{text6}</td>
		</tr>
	);
};

export default ListRow;