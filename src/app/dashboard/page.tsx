import { PageTitle } from "@/presentation/shared/components/PageTitle";
import { SearchFilter } from "@/presentation/features/dashboard/search-filter";
import { SupplierCreate } from "@/presentation/features/suppliers/suppliers-create-modal";

export default function DashboardPage() {
  return (
    <>
      <div className="flex items-stretch justify-between flex-col md:flex-row">
        <PageTitle title="Fornecedores" />
        <SupplierCreate />
      </div>
      <SearchFilter />
    </>
  );
}
