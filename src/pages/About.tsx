import React from 'react';
import { PageLayout } from '../components/PageLayout';
const team = [
{
  name: 'Alex Morgan',
  role: 'Editor-in-Chief',
  initials: 'AM'
},
{
  name: 'David Chen',
  role: 'Head of Growth',
  initials: 'DC'
},
{
  name: 'Sarah Johnson',
  role: 'Senior Curator',
  initials: 'SJ'
}];

export function About() {
  return (
    <PageLayout title="About Us">
      <div className="prose prose-lg prose-slate max-w-none font-serif text-midnight/80">
        <p className="text-2xl leading-relaxed mb-12 font-light">
          We believe that staying informed shouldn't be a full-time job. In a
          world of infinite scrolling and clickbait, we're building a sanctuary
          for clarity and brevity.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold font-playfair text-midnight mb-6">
            Our Mission
          </h2>
          <p className="mb-6">
            The Morning Brief was founded on a simple premise: professionals are
            busy, but they need to know what's happening in the world.
            Traditional news outlets are cluttered, noisy, and often biased
            towards sensationalism.
          </p>
          <p>
            Our mission is to respect your time and intelligence by delivering
            only the most essential stories, summarized with context and
            objectivity. We read everything so you don't have to.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold font-playfair text-midnight mb-8">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 not-prose">
            {team.map((member, index) =>
            <div
              key={index}
              className="bg-white p-8 text-center border border-midnight/5 hover:border-orange-red/30 transition-colors">

                <div className="w-20 h-20 mx-auto bg-cream border border-midnight/10 rounded-full flex items-center justify-center text-midnight text-xl font-bold mb-4 font-playfair">
                  {member.initials}
                </div>
                <h3 className="font-bold text-lg text-midnight font-playfair">
                  {member.name}
                </h3>
                <p className="text-orange-red font-medium text-sm uppercase tracking-wider">
                  {member.role}
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </PageLayout>);

}