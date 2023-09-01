import React from "react";
import BusinessPartnerData from "../../data/BusinessPartner.json";

const BusinessPartner = () => {
  const allData = BusinessPartnerData.Data;
  return (
    <div>
      <section className="py-6 bg-gray-50 dark:bg-slate-800">
        <div className="container">
          <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
            {allData?.map((data, index) => 
              
              <div className="mx-auto py-4" key={index}>
                    <img src={data.url} className="h-6" />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessPartner;
