import React from "react";
import CommentBox from "../comment/CommentBox";

const SynoAnno = (props) => {
    const meanings = props.meanings || [];

    // Create arrays for synonyms and antonyms
    const synonymsArray = [];
    const antonymsArray = [];

    meanings.forEach((item) => {
        item.definitions.forEach((def) => {
            if (def.synonyms) {
                synonymsArray.push(def.synonyms);
            }
            if (def.antonyms) {
                antonymsArray.push(def.antonyms);
            }
        });
    });

    return (
        <div className="flex justify-around mx-20 my-5 flex-col">
            <div>
                <div className="flex flex-row gap-3 mb-4">
                    <div className="rounded-lg w-max h-8 p-1 bg-[#72CCFF] font-semibold text-center">
                        Synonyms
                    </div>
                    <p>{synonymsArray.join(" ")}</p>
                </div>
            </div>
            <div>
                <div className="flex flex-row gap-3">
                    <div className="rounded-lg w-max h-8 p-1 bg-[#FFF175] font-semibold text-center">
                        Antonyms
                    </div>
                    <p>{antonymsArray.join(" ")}</p>
                </div>
            </div>
            <CommentBox />
        </div>
    );
};

export default SynoAnno;
