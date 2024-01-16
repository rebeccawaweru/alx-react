import React from "react";
import PropTypes from "prop-types";

const background = {
    row:{backgroundColor:'#f5f5f5ab'},
    header:{backgroundColor: '#deb5b545'}
}

function CourseListRow({ isHeader, textFirstCell, textSecondCell}) {
    return (
        <tr style={background.row}>
            {isHeader ? (
                textSecondCell === null ? (
                    <th style={background.header} colSpan={2}>{textFirstCell}</th>
                ) : (
                    <>
                    <th style={background.header}>{textFirstCell}</th>
                    <th style={background.header}>{textSecondCell}</th>
                    </>
                )
            ) : (
                <>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
                </>
            )}
        </tr>
    );
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
};

export default CourseListRow;