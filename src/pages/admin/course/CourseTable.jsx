import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetCreatorCourseQuery } from "@/features/api/courseApi";
import { Edit } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const invoices = [
  {
    invoice: "COURSE001",
    paymentStatus: "Active",
    totalAmount: "₹2,499",
    paymentMethod: "Online Payment",
  },
  {
    invoice: "COURSE002",
    paymentStatus: "Draft",
    totalAmount: "₹1,999",
    paymentMethod: "Not Set",
  },
  {
    invoice: "COURSE003",
    paymentStatus: "Active",
    totalAmount: "₹3,499",
    paymentMethod: "Online Payment",
  },
  {
    invoice: "COURSE004",
    paymentStatus: "Draft",
    totalAmount: "₹4,999",
    paymentMethod: "Not Set",
  },
  {
    invoice: "COURSE005",
    paymentStatus: "Active",
    totalAmount: "₹1,499",
    paymentMethod: "Online Payment",
  },
  {
    invoice: "COURSE006",
    paymentStatus: "Draft",
    totalAmount: "₹2,999",
    paymentMethod: "Not Set",
  },
  {
    invoice: "COURSE007",
    paymentStatus: "Active",
    totalAmount: "₹3,999",
    paymentMethod: "Online Payment",
  },
];

const CourseTable = () => {
  const { data, isLoading } = useGetCreatorCourseQuery();
  const navigate = useNavigate();

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div>
      <Button onClick={() => navigate(`create`)}>Create a new course</Button>
      <Table>
        <TableCaption>A list of your recent courses.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.courses.map((course) => (
            <TableRow key={course._id}>
              <TableCell className="font-medium">{course?.coursePrice || "NA"}</TableCell>
              <TableCell> <Badge>{course.isPublished ? "Published" : "Draft"}</Badge> </TableCell>
              <TableCell>{course.courseTitle}</TableCell>
              <TableCell className="text-right">
                <Button size='sm' variant='ghost' onClick={() => navigate(`${course._id}`)}><Edit /></Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CourseTable;
