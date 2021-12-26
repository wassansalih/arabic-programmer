import React from "react";

export default function LinuxTitles () {
    const titles = ["title 1", "title 2", "title 3", "title 44444444444444444444"];
    return (
        <div style= {{width: "100%", border: "1px solid green"}}>
            {titles.map((item, key) => 
                 (<div key={key}>
                     {item}
                 </div>
                )
            )}
        </div>
    );
}

