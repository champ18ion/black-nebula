import React from 'react';
import AddPeople from './AddPeople';
import MessageWindow from './MessageWindow';
import Console from './Console';

export default function MainPanel() {
  return (
    <div className="eight wide column">
      <h1>MainPanel</h1>
      <div className="three row divided grid">
        <AddPeople />
        <MessageWindow />
        <Console />
      </div>
    </div>
  );
}