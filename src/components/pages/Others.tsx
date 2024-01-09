import Header from "@/components/Header"

interface OthersProps {
    pageTitle: string
}

const Others: React.FC<OthersProps> = ({ pageTitle }) => {
  return (
    <div>
        <Header headerTitle={pageTitle} />
        <div className="flex justify-center py-44">
            <h1 className="text-5xl font-semibold text-[#4D4D4D]">{pageTitle}</h1>
        </div>
    </div>
  )
}

export default Others