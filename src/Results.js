import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          {props.results.phonetics.length > 0
            ? props.results.phonetics.map(function (phonetic, index) {
                if (phonetic.audio && phonetic.text) {
                  return (
                    <div key={index}>
                      <Phonetic phonetic={phonetic} />
                    </div>
                  );
                } else {
                  return <></>;
                }
              })
            : null}
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
