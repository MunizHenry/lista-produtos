import ProductCategoryRow from "../ProductCategoryRow";
import ProductRow from "../ProductRow";
import ProductTable from "../ProductTable";
import { SearchBar } from "../SearchBar";
import styles from "./FilterableProductTable.module.css"

export default function FilterableProductTable() {
    return (
        <div className={styles.container}>
            <SearchBar />
            <hr />
          <ProductTable />
        </div>

    )

}