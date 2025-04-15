
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Mic, Users, LandPlot, Quote } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-mahmudabad-navy opacity-70 z-10"></div>
        <div 
          className="absolute inset-0 bg-center bg-cover z-0" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
            backgroundPosition: 'center',
          }}
        ></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-20 text-white text-center">
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Dr. Ali Khan Mahmudabad
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in animate-delay-1">
            Bridging Worlds: Heritage, Scholarship, and Action
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in animate-delay-2">
            <Button asChild size="lg" className="bg-mahmudabad-gold hover:bg-mahmudabad-gold/90 text-black">
              <Link to="/about">Learn More</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
              <Link to="/public-voice">Latest Insights</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-20 bg-mahmudabad-cream">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Multiple Dimensions" 
            subtitle="Navigating the intersection of history, politics, and cultural heritage" 
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-mahmudabad-blue/10 rounded-full flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-mahmudabad-blue" />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2">Historian & Scholar</h3>
              <p className="text-muted-foreground">Researching Muslim South Asia, poetry, and concepts of belonging</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-mahmudabad-blue/10 rounded-full flex items-center justify-center">
                <Mic className="h-8 w-8 text-mahmudabad-blue" />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2">Public Intellectual</h3>
              <p className="text-muted-foreground">Bringing nuanced perspectives on history, identity, and politics to public discourse</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-mahmudabad-blue/10 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-mahmudabad-blue" />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2">Civic Leader</h3>
              <p className="text-muted-foreground">Driving initiatives in education, healthcare, and interfaith dialogue</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-mahmudabad-blue/10 rounded-full flex items-center justify-center">
                <LandPlot className="h-8 w-8 text-mahmudabad-blue" />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2">Cultural Guardian</h3>
              <p className="text-muted-foreground">Preserving the historical legacy of Mahmudabad and its cultural heritage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 section-pattern">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Featured Work" 
            subtitle="Highlights from academic research and public engagement" 
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <Card 
              title="Poetry of Belonging"
              content="Dr. Mahmudabad's groundbreaking book exploring Muslim belonging through the lens of Urdu poetry in colonial India."
              image="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            
            <Card 
              title="The Politics of Watan"
              content="Research on how the concept of homeland evolved in South Asian Muslim thought during the 19th and 20th centuries."
              image="https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            
            <Card 
              title="Madrassatul Waizeen Revival"
              content="Leading the restoration of this historic institution as a modern center for dialogue and knowledge production."
              image="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-mahmudabad-blue hover:bg-mahmudabad-blue/90">
              <Link to="/scholarship">
                Explore All Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-mahmudabad-blue text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center">
            <Quote className="h-12 w-12 mx-auto mb-6 text-mahmudabad-gold opacity-75" />
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-playfair italic mb-8">
              "History is not merely an academic exercise but a living dialogue between the past and present, shaping our understanding of identity, belonging, and the future we envision."
            </blockquote>
            <cite className="text-lg not-italic">— Dr. Ali Khan Mahmudabad</cite>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Recent Insights" 
            subtitle="Latest articles, talks, and media appearances" 
          />
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-playfair text-xl font-semibold mb-2">
                <Link to="#" className="text-mahmudabad-blue hover:text-mahmudabad-gold transition-colors">
                  The Evolving Political Landscape in Uttar Pradesh
                </Link>
              </h3>
              <p className="text-sm text-gray-500 mb-2">The Indian Express • March 15, 2025</p>
              <p className="text-muted-foreground">Analysis of recent political developments in UP and their implications for broader Indian politics.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-playfair text-xl font-semibold mb-2">
                <Link to="#" className="text-mahmudabad-blue hover:text-mahmudabad-gold transition-colors">
                  Identity Politics and Historical Memory in Contemporary India
                </Link>
              </h3>
              <p className="text-sm text-gray-500 mb-2">TRT World Interview • February 28, 2025</p>
              <p className="text-muted-foreground">Discussion on how historical narratives shape contemporary political identity in South Asia.</p>
            </div>
            
            <div className="pb-6">
              <h3 className="font-playfair text-xl font-semibold mb-2">
                <Link to="#" className="text-mahmudabad-blue hover:text-mahmudabad-gold transition-colors">
                  Manuscript Preservation: Saving South Asia's Literary Heritage
                </Link>
              </h3>
              <p className="text-sm text-gray-500 mb-2">Princeton University Lecture • January 20, 2025</p>
              <p className="text-muted-foreground">Presentation on efforts to digitize and preserve historical manuscripts from the Mahmudabad collection.</p>
            </div>
          </div>
          
          <div className="mt-8">
            <Button asChild variant="outline" className="border-mahmudabad-blue text-mahmudabad-blue hover:bg-mahmudabad-blue/5">
              <Link to="/public-voice">
                View All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-mahmudabad-terracotta text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Connect with Dr. Mahmudabad</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            For speaking engagements, media inquiries, or academic collaborations
          </p>
          <Button asChild size="lg" className="bg-white text-mahmudabad-terracotta hover:bg-gray-100">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
