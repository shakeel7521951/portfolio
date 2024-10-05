import { FaBars } from "react-icons/fa";
import { MdDeveloperBoard } from "react-icons/md";
import { FaWordpress } from "react-icons/fa";
import { Si365Datascience } from "react-icons/si";

const FeaturesData = [
    {
        id: "1001",
        icon: FaBars,
        title: "Business Strategy",
        link:'/web-development',
        description: "I integrate data, development, and WordPress solutions to optimize growth, streamline operations, and drive long-term business success."
    },
    {
        id: "1002",
        icon: MdDeveloperBoard,
        title: "Web Development",
        link:'/web-development',
        description: "I build sleek, responsive websites that bring your unique ideas to life, delivering user engagement and high performance."
    },
    {
        id: "1003",
        icon: FaWordpress,
        title: "WordPress Development",
        link:'/wordpress',
        description: "I develop user-friendly, custom WordPress sites that reflect your brand and are easy to manage and scale."
    },
    {
        id: "1004",
        icon: Si365Datascience,
        title: "Data Science",
        link:'/data-science',
        description: "I transform raw data into actionable insights, enabling better decision-making, optimizing strategies, and driving measurable business outcomes."
    }
];

export default FeaturesData;