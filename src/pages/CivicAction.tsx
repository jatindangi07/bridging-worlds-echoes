
import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Heart, Users, School, Building, Calendar } from 'lucide-react';

const CivicAction = () => {
  const initiatives = [
    {
      title: "Shoulder 2 Shoulder Foundation",
      description: "An organization dedicated to promoting interfaith dialogue and understanding, creating platforms for meaningful exchange between different religious communities.",
      icon: <Users className="h-10 w-10 text-mahmudabad-blue" />,
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Sitapur Eye Hospital",
      description: "Serving as a trustee for this institution that provides affordable eye care to underserved communities in Uttar Pradesh, continuing a family tradition of healthcare support.",
      icon: <Heart className="h-10 w-10 text-mahmudabad-blue" />,
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Madrassatul Waizeen Revival",
      description: "Leading the transformation of this historic institution into a modern center for Islamic studies, intercultural dialogue, and educational excellence.",
      icon: <School className="h-10 w-10 text-mahmudabad-blue" />,
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const upcomingEvents = [
    {
      title: "Interfaith Dialogue Conference",
      date: "June 15-16, 2025",
      location: "Delhi, India",
      description: "A two-day conference bringing together religious leaders and scholars to discuss pathways to harmony."
    },
    {
      title: "Madrassatul Waizeen Inaugural Lecture Series",
      date: "August 10, 2025",
      location: "Lucknow, India",
      description: "Launch of a new lecture series exploring contemporary issues in Islamic thought."
    },
    {
      title: "Cultural Heritage Preservation Workshop",
      date: "September 5, 2025",
      location: "Mahmudabad Estate",
      description: "Hands-on workshop on manuscript conservation and digital preservation techniques."
    }
  ];

  return (
    <Layout>
      <PageHeader 
        title="Civic Action & Engagement"
        subtitle="Translating academic insights into meaningful community initiatives"
        backgroundImage="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        className="text-white"
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Vision & Approach" 
                subtitle="Connecting heritage, scholarship, and public service"
              />
              
              <div className="prose prose-blue max-w-none">
                <p className="lead text-lg text-mahmudabad-blue">
                  Dr. Mahmudabad's civic engagement is driven by a commitment to translate academic insights into initiatives that address contemporary challenges while honoring cultural heritage.
                </p>
                
                <p>
                  Drawing on his historical research and understanding of intercommunal dynamics in South Asia, Dr. Mahmudabad focuses on creating spaces for dialogue, preserving cultural knowledge, and addressing social needs through targeted interventions.
                </p>
                
                <p>
                  His approach emphasizes collaboration across religious, cultural, and social boundaries, recognizing that lasting positive change requires inclusive participation and mutual respect.
                </p>
                
                <p>
                  These civic initiatives emerge from a deep sense of responsibility to both heritage and future generations, seeking to create bridges between past wisdom and present needs.
                </p>
              </div>
              
              <div className="mt-8">
                <Button asChild className="bg-mahmudabad-blue hover:bg-mahmudabad-blue/90">
                  <a href="#initiatives">Explore Initiatives</a>
                </Button>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Dr. Mahmudabad speaking at community event" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section id="initiatives" className="py-16 bg-mahmudabad-cream">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Key Initiatives" 
            subtitle="Organizations and projects advancing dialogue, education, and community welfare"
            align="center"
          />
          
          <div className="mt-12 space-y-16">
            {initiatives.map((initiative, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                <div className="lg:w-1/2">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={initiative.image} 
                      alt={initiative.title} 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="mb-4">
                    {initiative.icon}
                  </div>
                  
                  <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-4 text-mahmudabad-blue">
                    {initiative.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {initiative.description}
                  </p>
                  
                  <Button asChild variant="outline" className="border-mahmudabad-blue text-mahmudabad-blue hover:bg-mahmudabad-blue/5">
                    <a href="#">Learn More</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-mahmudabad-blue text-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Madrassatul Waizeen Revival" 
            subtitle="Transforming a historic institution into a modern center for knowledge and dialogue"
            className="text-white"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
            <div className="col-span-1 lg:col-span-2">
              <div className="prose prose-invert max-w-none">
                <p className="lead text-xl">
                  The revival of Madrassatul Waizeen represents one of Dr. Mahmudabad's most significant civic initiatives, connecting historical preservation with contemporary educational needs.
                </p>
                
                <h3 className="text-mahmudabad-gold">Historical Significance</h3>
                <p>
                  Founded in the early 20th century, Madrassatul Waizeen was once a premier center for Islamic learning in Lucknow, known for its progressive approach to education and emphasis on critical thinking alongside traditional studies.
                </p>
                
                <h3 className="text-mahmudabad-gold">Vision for Revival</h3>
                <p>
                  The revitalization project aims to transform this historic institution into a modern educational center that honors its intellectual legacy while addressing contemporary challenges. Key elements include:
                </p>
                
                <ul>
                  <li>A comprehensive curriculum integrating Islamic studies with modern disciplines</li>
                  <li>Research facilities focused on manuscript preservation and historical studies</li>
                  <li>Programs promoting interfaith dialogue and understanding</li>
                  <li>Community outreach initiatives addressing local educational needs</li>
                </ul>
                
                <h3 className="text-mahmudabad-gold">Current Status</h3>
                <p>
                  The project is currently in its initial phase, with architectural restoration underway and curriculum development in progress. The first programs are expected to launch in late 2025.
                </p>
              </div>
              
              <div className="mt-8">
                <Button asChild className="bg-mahmudabad-gold text-black hover:bg-mahmudabad-gold/90">
                  <a href="#">Support the Revival</a>
                </Button>
              </div>
            </div>
            
            <div>
              <div className="bg-white/10 p-6 rounded-lg mb-6">
                <h4 className="font-playfair text-xl font-semibold mb-4 text-mahmudabad-gold">Project Timeline</h4>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-12 flex-shrink-0 text-center">
                      <span className="inline-block w-6 h-6 rounded-full bg-mahmudabad-gold"></span>
                    </div>
                    <div>
                      <h5 className="font-semibold">2023-2024</h5>
                      <p className="text-sm text-gray-300">Architectural assessment and restoration planning</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 flex-shrink-0 text-center">
                      <span className="inline-block w-6 h-6 rounded-full bg-mahmudabad-gold"></span>
                    </div>
                    <div>
                      <h5 className="font-semibold">2024-2025</h5>
                      <p className="text-sm text-gray-300">Building restoration and curriculum development</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 flex-shrink-0 text-center">
                      <span className="inline-block w-6 h-6 rounded-full bg-mahmudabad-gold"></span>
                    </div>
                    <div>
                      <h5 className="font-semibold">Late 2025</h5>
                      <p className="text-sm text-gray-300">Launch of initial educational programs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 flex-shrink-0 text-center">
                      <span className="inline-block w-6 h-6 rounded-full bg-mahmudabad-gold"></span>
                    </div>
                    <div>
                      <h5 className="font-semibold">2026</h5>
                      <p className="text-sm text-gray-300">Full operational capacity with comprehensive programs</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="font-playfair text-xl font-semibold mb-4 text-mahmudabad-gold">Get Involved</h4>
                <p className="mb-4 text-sm">There are several ways to support this important initiative:</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Financial contributions for restoration and programs</li>
                  <li>• Book donations for the library collection</li>
                  <li>• Expert volunteers for curriculum development</li>
                  <li>• Partnership opportunities for educational institutions</li>
                </ul>
                <div className="mt-6">
                  <a href="#" className="text-mahmudabad-gold hover:underline">Contact us to learn more →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Political Engagement" 
            subtitle="Advocating for social equity and inclusive governance"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
            <div className="lg:col-span-2">
              <div className="prose prose-blue max-w-none">
                <p>
                  In addition to his academic and cultural initiatives, Dr. Mahmudabad has been actively engaged in politics, particularly through his association with the Samajwadi Party in Uttar Pradesh.
                </p>
                
                <p>
                  His political involvement is informed by his scholarly understanding of historical power dynamics and contemporary social challenges, with a focus on promoting policies that advance social equity, protect minority rights, and strengthen democratic institutions.
                </p>
                
                <p>
                  As a former spokesperson for the Samajwadi Party, Dr. Mahmudabad brought a nuanced perspective to political discourse, emphasizing evidence-based policy making and the importance of inclusive governance that respects India's diverse cultural and religious heritage.
                </p>
                
                <p>
                  Though his primary focus has shifted to his academic and civic initiatives, Dr. Mahmudabad continues to contribute to political discourse through his writing and speaking engagements, advocating for a politics grounded in historical understanding and commitment to constitutional values.
                </p>
              </div>
            </div>
            
            <div>
              <div className="bg-mahmudabad-cream p-6 rounded-lg">
                <Building className="h-10 w-10 text-mahmudabad-blue mb-4" />
                <h3 className="font-playfair text-xl font-semibold mb-3 text-mahmudabad-blue">Policy Priorities</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Educational access and reform</li>
                  <li>• Cultural heritage preservation</li>
                  <li>• Interfaith harmony and minority rights</li>
                  <li>• Sustainable rural development</li>
                  <li>• Democratic institutions strengthening</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 section-pattern">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Upcoming Events" 
            subtitle="Opportunities to engage with Dr. Mahmudabad's civic initiatives"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Calendar className="h-5 w-5 text-mahmudabad-gold mr-2" />
                  <span className="font-medium">{event.date}</span>
                </div>
                
                <h3 className="font-playfair text-xl font-semibold mb-2 text-mahmudabad-blue">
                  {event.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  <span className="block text-sm text-mahmudabad-gold mb-2">{event.location}</span>
                  {event.description}
                </p>
                
                <Button variant="outline" asChild className="w-full justify-center">
                  <a href="#">Learn More</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-mahmudabad-terracotta text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Join Our Efforts</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Support Dr. Mahmudabad's civic initiatives through donations, volunteering, or partnership opportunities
          </p>
          <Button asChild size="lg" className="bg-white text-mahmudabad-terracotta hover:bg-gray-100">
            <a href="#">Get Involved</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default CivicAction;
