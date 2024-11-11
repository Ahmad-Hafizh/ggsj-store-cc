import React from "react";

const Value = () => {
  return (
    <div>
      <h2>our values</h2>
      <div>
        <div className="grid grid-cols-1 border-b-2 py-4 lg:grid-cols-2">
          <div id="left">
            <p className="text-5xl">01</p>
          </div>
          <div id="right" className="flex flex-col gap-4">
            <p className="text-5xl">Segar dan Berkualitas</p>
            <p>
              Kami menawarkan ragam produk segar langsung dari ladang dan
              lautan, membawa kelezatan alami dan nutrisi maksimal kepada Anda.
              Dari sayuran organik hingga hasil laut segar, setiap produk kami
              dipilih dengan teliti untuk memastikan kualitas terbaik.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Value;
