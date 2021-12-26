import React from "react";

export default function LinuxContents () {
    const contents = ["content 1", "content 2", "content 3", "content 4"];
    return (
        <div style= {{width: "100%", border: "1px solid green"}}>
            {contents.map((item, index) => 
                 (<div key={index}>
                     {item}
                 </div>
                )
            )}
        </div>
    );
}