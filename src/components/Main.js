import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <main>
      <div className="main">
        <div className="health-plans healthy-plan">
          <h2>Health Plans</h2>
          <p>
            Meet your members where they are with flexible support to assist
            older adults and families in overcoming social barriers to health
            and well-being. More than 70 health plans work with Papa in a shared
            mission to help Medicare Advantage, Medicaid, and commercial members
            live and feel better.
          </p>
          <button>LEARN MORE</button>
        </div>

        <div className="mom-dad-pic health-plans">
          <img
            src="./Home-Stacked-768x1024_HealthPlans-3.jpg"
            alt="Mom and Dad"
            className="health-plan-pic-1"
          />
          <img
            src="./Home-Stacked-768x1024_HealthPlans-2.jpg"
            alt="Mom and Dad"
            className="health-plan-pic-2"
          />
          <img
            src="./Home-Stacked-768x1024_HealthPlans-1.jpg"
            alt="Mom and Dad"
            className="health-plan-pic-3"
          />
        </div>

        <div className="mom-dad-pic health-plans failure-plan">
          <img
            src="./Home-Stacked-768x1024_Employers-3.jpg"
            alt="Mom and Dad"
            className="health-plan-pic-1"
          />
          <img
            src="./Home-Stacked-768x1024_Employers-2.jpg"
            alt="Mom and Dad"
            className="health-plan-pic-2"
          />
          <img
            src="./Home-Stacked-768x1024_Employers-1.jpg"
            alt="Mom and Dad"
            className="health-plan-pic-3"
          />
        </div>

        <div className="health-plans healthy-plan failure-plan">
          <h2>Employers</h2>
          <p>
            Attract and retain talent with a whole-family benefit that lightens
            the load on caregivers, fosters physical and mental health, and
            gives your team time back in the day. Papa is not another digital
            front door, we’re help right to the door.
          </p>
          <button>LEARN MORE</button>
        </div>

        <div className="health-plans healthy-plan failure-plan">
          <h2>Papa Pals</h2>
          <p>
            Get a flexible job you can feel good about, helping members of your
            community on your schedule while working (and earning) as much as
            you like. Learn how Papa Pals create healthy connections, one visit
            at a time.
          </p>
          <button>LEARN MORE</button>
        </div>

        <div className="mom-dad-pic health-plans failure-plan">
          <img
            src="./Home-Stacked-768x1024_PapaPals-3.jpg"
            alt="Mom and Dad"
            className="health-plan-pic-1"
          />
          <img
            src="./Home-Stacked-768x1024_PapaPals-2.jpg"
            alt="Mom and Dad"
            className="health-plan-pic-2"
          />
          <img
            src="./Home-Stacked-768x1024_PapaPals-1.jpg"
            alt="Mom and Dad"
            className="health-plan-pic-3"
          />
        </div>

        <div className="mom-dad-pic health-plans failure-plan">
          <img
            src="./Home-Stacked-768x1024_Employers-3.jpg"
            alt="Mom and Dad"
            className="health-plan-pic-1"
          />
          <img
            src="./Home-Stacked-768x1024_Employers-2.jpg"
            alt="Mom and Dad"
            className="health-plan-pic-2"
          />
          <img
            src="./Home-Stacked-768x1024_Employers-1.jpg"
            alt="Mom and Dad"
            className="health-plan-pic-3"
          />
        </div>

        <div className="health-plans healthy-plan failure-plan">
          <h2>Members</h2>
          <p>
            Get help that comes to you or your loved ones. Papa is family care
            that feels like family—when, where, and how you want it. Learn how
            to make your next pal, through your participating health plan.
          </p>
          <button>LEARN MORE</button>
        </div>
      </div>
    </main>
  );
};

export default Main;
