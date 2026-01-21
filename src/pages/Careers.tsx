import React from 'react';
import { ArrowRight, MapPin, Clock } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';
const jobs = [
{
  title: 'Senior Editor',
  type: 'Full-time',
  location: 'Remote',
  description:
  'Lead our editorial strategy and manage a team of curators. 5+ years of journalism experience required.'
},
{
  title: 'Content Curator',
  type: 'Part-time',
  location: 'Remote',
  description:
  'Scour the web for the most important stories of the day and summarize them with wit and brevity.'
},
{
  title: 'Marketing Manager',
  type: 'Full-time',
  location: 'New York, NY',
  description:
  'Drive growth and engagement through strategic partnerships and community building.'
}];

export function Careers() {
  return (
    <PageLayout title="Join Our Team">
      <div className="mb-16 text-center">
        <p className="text-xl text-midnight/70 leading-relaxed max-w-2xl mx-auto font-serif">
          We're a small, ambitious team building the future of news consumption.
          We value curiosity, clarity, and kindness.
        </p>
      </div>

      <div className="grid gap-6">
        {jobs.map((job, index) =>
        <div
          key={index}
          className="group bg-white border border-midnight/5 p-8 hover:border-orange-red/30 hover:shadow-sm transition-all duration-300">

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold font-playfair text-midnight mb-2 group-hover:text-orange-red transition-colors">
                  {job.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-midnight/50 mb-4 font-mono uppercase tracking-wider">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {job.type}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </div>
                </div>
                <p className="text-midnight/70 max-w-2xl font-serif">
                  {job.description}
                </p>
              </div>

              <button className="px-6 py-3 bg-cream text-midnight font-bold border border-midnight/10 group-hover:bg-orange-red group-hover:text-white group-hover:border-orange-red transition-all flex items-center justify-center gap-2 whitespace-nowrap rounded-lg">
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </PageLayout>);

}