import NavBar from "@/components/NavBar";
import { Table } from "@/components/Table";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-10">
      <NavBar />
      <Table />
    </div>
  );
}
