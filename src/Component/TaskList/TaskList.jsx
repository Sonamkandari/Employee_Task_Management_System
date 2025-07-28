import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({data}) => {
  return (
    <div id ='tasklist'className="min-h-[55vh] w-full py-10 px-6 bg-gradient-to-br from-slate-800 to-gray-900 mt-10 rounded-2xl shadow-2xl overflow-x-auto">
      <div className="flex gap-6 items-start justify-start min-w-max">
       
       {/* Task Card 1 we don't have to render these directly
        <AcceptTask/>
        <NewTask/>
         <CompleteTask/>
         <FailedTask/> */}

         {/* we will use map here */}
         {data.tasks.map((element,idx)=>{
          if(element.active){
            return<AcceptTask key={idx} data={element}/>
          }
          if(element.newTask){
            return<NewTask  key={idx} data={element}/>
          }
          if(element.completed){
            return<CompleteTask  key={idx} data={element}/>
          }
          if(element.failed){
            return<FailedTask  key={idx}data={element}/>
          }
          
         })}

      </div>
    </div>
  );
};

export default TaskList;
