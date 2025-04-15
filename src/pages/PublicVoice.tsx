
import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const PublicVoice = () => {
  const featuredMedia = [
    {
      title: "The Historical Roots of Identity Politics in India",
      venue: "TRT World",
      date: "March 15, 2025",
      type: "Interview",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "An in-depth discussion on how historical narratives shape contemporary political discourse in India."
    },
    {
      title: "Islamic Poetry and Political Resistance",
      venue: "Princeton University",
      date: "February 2, 2025",
      type: "Lecture",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Exploring how poetic expression became a form of political resistance in colonial South Asia."
    },
    {
      title: "Manuscript Preservation in the Digital Age",
      venue: "IIT Bombay",
      date: "January 18, 2025",
      type: "Conference",
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Presenting the Raja of Mahmudabad Palace Library Project and its significance for cultural preservation."
    }
  ];

  const articles = [
    {
      title: "The Evolving Political Landscape in Uttar Pradesh",
      publication: "The Indian Express",
      date: "March 15, 2025",
      category: "Politics",
      excerpt: "Analysis of recent political developments in UP and their implications for broader Indian politics."
    },
    {
      title: "Reclaiming Shared Heritage: The Challenge for Modern India",
      publication: "The Wire",
      date: "February 28, 2025",
      category: "History",
      excerpt: "Examining how historical narratives can either divide or unite communities in contemporary India."
    },
    {
      title: "Poetry as Resistance: Urdu Literary Traditions in Colonial India",
      publication: "Scroll.in",
      date: "February 10, 2025",
      category: "Culture",
      excerpt: "How Urdu poets used their art as a form of subtle resistance against colonial rule."
    },
    {
      title: "The Meaning of Citizenship in Today's India",
      publication: "The Indian Express",
      date: "January 25, 2025",
      category: "Politics",
      excerpt: "Reflections on citizenship laws and their impact on India's democratic fabric."
    },
    {
      title: "Preserving Awadhi Cuisine: A Cultural Imperative",
      publication: "Food & Culture Magazine",
      date: "January 15, 2025",
      category: "Culture",
      excerpt: "The importance of preserving regional culinary traditions as part of cultural heritage."
    },
    {
      title: "Madrassatul Waizeen: Reviving an Educational Legacy",
      publication: "Inquilab (Urdu)",
      date: "January 5, 2025",
      category: "Education",
      excerpt: "Plans for transforming a historic madrassa into a modern center for Islamic studies and dialogue."
    }
  ];

  const talks = [
    {
      title: "The Politics of Belonging in Modern India",
      venue: "Harvard University",
      date: "December 12, 2024",
      type: "Lecture",
      description: "Examined how notions of belonging are contested in contemporary Indian politics."
    },
    {
      title: "Preservation of Cultural Heritage in South Asia",
      venue: "UNESCO Conference, Paris",
      date: "November 5, 2024",
      type: "Panel Discussion",
      description: "Discussed challenges and opportunities in preserving South Asia's diverse cultural heritage."
    },
    {
      title: "Muslim Intellectual Traditions in Colonial India",
      venue: "Columbia University",
      date: "October 18, 2024",
      type: "Seminar",
      description: "Explored the evolution of Muslim thought during the British colonial period."
    }
  ];

  return (
    <Layout>
      <PageHeader 
        title="Public Voice"
        subtitle="Bringing academic insights into public discourse through media, lectures, and writing"
        backgroundImage="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        className="text-white"
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Featured Media Appearances" 
            subtitle="Recent interviews, lectures, and panel discussions"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {featuredMedia.map((item, index) => (
              <Card 
                key={index}
                title={item.title}
                content={`${item.venue} • ${item.date} • ${item.type}\n\n${item.description}`}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-mahmudabad-cream">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Public Writing" 
            subtitle="Articles, columns, and commentary in multiple languages"
          />
          
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input placeholder="Search articles..." className="pl-10" />
            </div>
            
            <div className="flex-shrink-0">
              <Tabs defaultValue="all">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="politics">Politics</TabsTrigger>
                  <TabsTrigger value="history">History</TabsTrigger>
                  <TabsTrigger value="culture">Culture</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
          
          <div className="space-y-6">
            {articles.map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-playfair text-xl font-semibold mb-2 text-mahmudabad-blue">
                  <a href="#" className="hover:text-mahmudabad-gold transition-colors">
                    {article.title}
                  </a>
                </h3>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{article.publication}</span>
                  <span className="mx-2">•</span>
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span className="text-mahmudabad-gold">{article.category}</span>
                </div>
                <p className="text-muted-foreground">{article.excerpt}</p>
                <div className="mt-4">
                  <a href="#" className="text-mahmudabad-blue hover:text-mahmudabad-gold transition-colors text-sm font-medium">
                    Read Full Article →
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button className="bg-mahmudabad-blue hover:bg-mahmudabad-blue/90">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-mahmudabad-navy text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Bridging Academia and Public Discourse</h2>
            <p className="text-lg mb-8">
              As a public intellectual, Dr. Mahmudabad is committed to bringing nuanced historical and political insights to broader audiences, enriching public debate through academic perspective.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-12">
              <div>
                <div className="text-4xl font-bold text-mahmudabad-gold mb-2">120+</div>
                <p className="text-gray-300">Articles Published</p>
              </div>
              
              <div>
                <div className="text-4xl font-bold text-mahmudabad-gold mb-2">50+</div>
                <p className="text-gray-300">Speaking Engagements</p>
              </div>
              
              <div>
                <div className="text-4xl font-bold text-mahmudabad-gold mb-2">30+</div>
                <p className="text-gray-300">Media Interviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Speaking Engagements" 
            subtitle="Lectures, seminars, and panel discussions at universities and conferences worldwide"
          />
          
          <div className="mt-10 space-y-6">
            {talks.map((talk, index) => (
              <div key={index} className="border-l-4 border-mahmudabad-gold pl-6 py-2">
                <h3 className="font-playfair text-xl font-semibold mb-1 text-mahmudabad-blue">{talk.title}</h3>
                <div className="text-sm text-gray-500 mb-2">
                  <span>{talk.venue}</span>
                  <span className="mx-2">•</span>
                  <span>{talk.date}</span>
                  <span className="mx-2">•</span>
                  <span>{talk.type}</span>
                </div>
                <p className="text-muted-foreground">{talk.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-10">
            <Button variant="outline" className="border-mahmudabad-blue text-mahmudabad-blue hover:bg-mahmudabad-blue/5">
              View All Past Events
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-mahmudabad-terracotta text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Invite Dr. Mahmudabad</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            For speaking engagements, media appearances, or expert commentary on South Asian history, politics, and Muslim identity
          </p>
          <Button asChild size="lg" className="bg-white text-mahmudabad-terracotta hover:bg-gray-100">
            <a href="mailto:speaking@alimahmudabad.com">Request an Engagement</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default PublicVoice;
