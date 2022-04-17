import React from "react"
import Input from "../Input/Input"
import Tag from "../Tag/Tag"

const CategoryFilter = () => {
	return (
		<div className="category-filter">
			<Input type="search" label="Filter categories" />
			<div className="flex">
				<Tag className="active">Baby food</Tag>
				<Tag className="">Canned goods</Tag>
				<Tag className="">Baby food</Tag>
				<Tag className="active">Canned goods</Tag>
				<Tag className="active">Baby food</Tag>
				<Tag className="">Canned goods</Tag>
				<Tag>Baby food</Tag>
				<Tag>Canned goods</Tag>
				<Tag>Baby food</Tag>
				<Tag>Canned goods</Tag>
				<Tag>Baby food</Tag>
				<Tag>Canned goods</Tag>
			</div>
		</div>
	)
}

export default CategoryFilter
