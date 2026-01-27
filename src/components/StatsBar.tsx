import React from 'react';
import { Zap, Layout, Users } from 'lucide-react';

const StatsBar: React.FC = () => {
  return (
    <div className="bg-slate-50 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 py-8 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="flex flex-col items-center text-center p-2">
                <Zap className="w-8 h-8 text-brand-yellow mb-3" />
                <h3 className="text-3xl font-extrabold text-slate-900">100%</h3>
                <p className="text-slate-500 font-medium mt-1">Internship Placement <br/>(Cohort 2025)</p>
            </div>
             <div className="flex flex-col items-center text-center p-2">
                <Layout className="w-8 h-8 text-brand-blue mb-3" />
                <h3 className="text-3xl font-extrabold text-slate-900">12+</h3>
                <p className="text-slate-500 font-medium mt-1">Digital Engineering <br/>Modules</p>
            </div>
             <div className="flex flex-col items-center text-center p-2">
                <Users className="w-8 h-8 text-brand-red mb-3" />
                <h3 className="text-3xl font-extrabold text-slate-900">1:1</h3>
                <p className="text-slate-500 font-medium mt-1">Industry Expert <br/>Mentorship</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBar;