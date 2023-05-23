import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import RecommendsCard from "./RecommendsCard";

const Recommends = () => {
  const [recommends, setRecommends] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setRecommends(data.slice(0, 3)));
  }, []);
  return (
    <section className="my-20">
      <SectionTitle heading={"CHEF RECOMMENDS"} subHeading={"Should Try"} />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 ">
        {recommends.map((rec) => (
          <RecommendsCard key={rec._id} rec={rec} />
        ))}
      </div>
    </section>
  );
};

export default Recommends;
