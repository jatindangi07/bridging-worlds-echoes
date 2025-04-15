
import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, FileText, Award, Search } from 'lucide-react';

const Scholarship = () => {
  const publications = [
    {
      type: 'book',
      title: 'Poetry of Belonging: Muslim Imaginings of India 1850-1950',
      year: '2020',
      publisher: 'Oxford University Press',
      description: 'A groundbreaking study of how Urdu poetry reveals Muslim conceptions of homeland and belonging in colonial India.',
      link: '#'
    },
    {
      type: 'chapter',
      title: 'Reimagining Watan: Poetic Articulations of Homeland in Late Colonial India',
      year: '2021',
      publisher: 'In "Anticolonial Thought in South Asia", Columbia University Press',
      description: 'Explores how the concept of homeland (watan) evolved in Urdu poetry during the nationalist movement.',
      link: '#'
    },
    {
      type: 'article',
      title: 'The Raja of Mahmudabad Palace Library Project: Preserving Muslim Intellectual Heritage',
      year: '2022',
      publisher: 'Journal of Islamic Manuscripts, 13(2)',
      description: 'Documents efforts to preserve and digitize the historic manuscript collection at Mahmudabad Palace.',
      link: '#'
    },
    {
      type: 'article',
      title: 'Shia-Sunni Relations in Colonial India: Networks of Scholarship and Patronage',
      year: '2019',
      publisher: 'Modern Asian Studies, 53(5)',
      description: 'Examines the dynamics of sectarian relations through the lens of scholarly networks and patronage systems.',
      link: '#'
    },
    {
      type: 'chapter',
      title: 'Poetic Politics: Mushairas as Sites of Resistance in Late Colonial India',
      year: '2018',
      publisher: 'In "Performances of Resistance in South Asia", Routledge',
      description: 'Analyzes how poetry gatherings became spaces for political expression and resistance during the independence movement.',
      link: '#'
    }
  ];

  const columns = [
    {
      title: 'Inquilab',
      language: 'Urdu',
      description: 'Weekly column "Sadā-e Dil" on politics, identity, and culture',
      count: '120+ articles'
    },
    {
      title: 'The Indian Express',
      language: 'English',
      description: 'Regular opinion pieces on Indian politics and history',
      count: '75+ articles'
    },
    {
      title: 'The Wire',
      language: 'English',
      description: 'Analysis of current affairs through historical perspective',
      count: '50+ articles'
    },
    {
      title: 'Times of India',
      language: 'English',
      description: 'Blog "Counterflows" on politics and society',
      count: '40+ posts'
    }
  ];

  const researchThemes = [
    {
      title: 'Muslim South Asia (1850-1950)',
      description: 'Exploring the intellectual, cultural, and political history of Muslims in South Asia during the colonial period and early independence.'
    },
    {
      title: 'Poetry as Historical Archive',
      description: 'Using Urdu and Persian poetry as sources for understanding emotional and intellectual responses to historical change.'
    },
    {
      title: 'Concepts of Belonging and Watan',
      description: 'Analyzing how notions of homeland, belonging, and identity evolved among South Asian Muslims.'
    },
    {
      title: 'Transnational Muslim Networks',
      description: 'Mapping connections between South Asian Muslims and broader Islamic world during the colonial period.'
    },
    {
      title: 'Shia-Sunni Dynamics in South Asia',
      description: 'Examining sectarian relations, scholarly exchanges, and shared cultural practices.'
    }
  ];

  return (
    <Layout>
      <PageHeader 
        title="Scholarship & Research"
        subtitle="Exploring Muslim South Asia through history, literature, and political thought"
        backgroundImage="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        className="text-white"
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Core Research Themes" 
            subtitle="Interdisciplinary approaches to history, identity, and belonging"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {researchThemes.map((theme, index) => (
              <div key={index} className="bg-mahmudabad-cream p-6 rounded-lg">
                <h3 className="font-playfair text-xl font-semibold mb-3 text-mahmudabad-blue">{theme.title}</h3>
                <p className="text-muted-foreground">{theme.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-mahmudabad-blue text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Poetry of Belonging</h2>
              <p className="text-lg mb-6">
                Dr. Mahmudabad's groundbreaking book explores how Muslim intellectuals and poets in late colonial India articulated their relationship to the nation through Urdu poetry.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Award className="h-5 w-5 text-mahmudabad-gold mr-3 mt-1" />
                  <p>Winner of the BISA Susan Strange Book Prize, 2021</p>
                </div>
                <div className="flex items-start">
                  <FileText className="h-5 w-5 text-mahmudabad-gold mr-3 mt-1" />
                  <p>Published by Oxford University Press, 2020</p>
                </div>
                <div className="flex items-start">
                  <Search className="h-5 w-5 text-mahmudabad-gold mr-3 mt-1" />
                  <p>Based on extensive multilingual archival research across South Asia and Europe</p>
                </div>
              </div>
              <Button className="bg-mahmudabad-gold text-black hover:bg-mahmudabad-gold/90" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Learn More <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Poetry of Belonging book cover"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Publications" 
            subtitle="Books, book chapters, and peer-reviewed journal articles"
          />
          
          <Tabs defaultValue="all" className="w-full mt-8">
            <TabsList className="w-full max-w-md mx-auto mb-8">
              <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
              <TabsTrigger value="books" className="flex-1">Books</TabsTrigger>
              <TabsTrigger value="chapters" className="flex-1">Chapters</TabsTrigger>
              <TabsTrigger value="articles" className="flex-1">Articles</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-6">
              {publications.map((pub, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <div className="flex items-start">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full bg-mahmudabad-blue/10 flex items-center justify-center">
                        <FileText className="h-6 w-6 text-mahmudabad-blue" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl font-semibold mb-1 text-mahmudabad-blue">
                        {pub.title}
                      </h3>
                      <p className="text-mahmudabad-gold text-sm mb-2">{pub.year} • {pub.publisher}</p>
                      <p className="text-muted-foreground mb-3">{pub.description}</p>
                      <a 
                        href={pub.link} 
                        className="text-mahmudabad-blue hover:text-mahmudabad-gold transition-colors inline-flex items-center text-sm font-medium"
                      >
                        Read More <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
            
            <TabsContent value="books" className="space-y-6">
              {publications.filter(p => p.type === 'book').map((pub, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <div className="flex items-start">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full bg-mahmudabad-blue/10 flex items-center justify-center">
                        <FileText className="h-6 w-6 text-mahmudabad-blue" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl font-semibold mb-1 text-mahmudabad-blue">
                        {pub.title}
                      </h3>
                      <p className="text-mahmudabad-gold text-sm mb-2">{pub.year} • {pub.publisher}</p>
                      <p className="text-muted-foreground mb-3">{pub.description}</p>
                      <a 
                        href={pub.link} 
                        className="text-mahmudabad-blue hover:text-mahmudabad-gold transition-colors inline-flex items-center text-sm font-medium"
                      >
                        Read More <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
            
            <TabsContent value="chapters" className="space-y-6">
              {publications.filter(p => p.type === 'chapter').map((pub, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <div className="flex items-start">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full bg-mahmudabad-blue/10 flex items-center justify-center">
                        <FileText className="h-6 w-6 text-mahmudabad-blue" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl font-semibold mb-1 text-mahmudabad-blue">
                        {pub.title}
                      </h3>
                      <p className="text-mahmudabad-gold text-sm mb-2">{pub.year} • {pub.publisher}</p>
                      <p className="text-muted-foreground mb-3">{pub.description}</p>
                      <a 
                        href={pub.link} 
                        className="text-mahmudabad-blue hover:text-mahmudabad-gold transition-colors inline-flex items-center text-sm font-medium"
                      >
                        Read More <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
            
            <TabsContent value="articles" className="space-y-6">
              {publications.filter(p => p.type === 'article').map((pub, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <div className="flex items-start">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full bg-mahmudabad-blue/10 flex items-center justify-center">
                        <FileText className="h-6 w-6 text-mahmudabad-blue" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl font-semibold mb-1 text-mahmudabad-blue">
                        {pub.title}
                      </h3>
                      <p className="text-mahmudabad-gold text-sm mb-2">{pub.year} • {pub.publisher}</p>
                      <p className="text-muted-foreground mb-3">{pub.description}</p>
                      <a 
                        href={pub.link} 
                        className="text-mahmudabad-blue hover:text-mahmudabad-gold transition-colors inline-flex items-center text-sm font-medium"
                      >
                        Read More <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <section className="py-16 section-pattern">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Public Writing"
            subtitle="Regular columns and commentary in multiple languages"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {columns.map((column, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-playfair text-xl font-semibold mb-1 text-mahmudabad-blue">{column.title}</h3>
                <p className="text-mahmudabad-gold text-sm mb-3">{column.language} • {column.count}</p>
                <p className="text-muted-foreground">{column.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="bg-transparent border-mahmudabad-blue text-mahmudabad-blue hover:bg-mahmudabad-blue/5">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Browse Articles Archive <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-mahmudabad-navy text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Research Methodology</h2>
          <p className="text-lg max-w-3xl mx-auto mb-10">
            Dr. Mahmudabad's interdisciplinary approach combines historical research with political analysis, leveraging multilingual primary sources to uncover narratives often overlooked in conventional accounts.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white/10 rounded-lg">
              <h3 className="font-playfair text-xl font-semibold mb-3 text-mahmudabad-gold">Multilingual Sources</h3>
              <p>Working across Urdu, Persian, Arabic, Hindi, and English to access diverse perspectives and voices.</p>
            </div>
            
            <div className="p-6 bg-white/10 rounded-lg">
              <h3 className="font-playfair text-xl font-semibold mb-3 text-mahmudabad-gold">Literature as Archive</h3>
              <p>Using poetry, fiction, and other literary forms as historical sources that capture emotional and intellectual responses.</p>
            </div>
            
            <div className="p-6 bg-white/10 rounded-lg">
              <h3 className="font-playfair text-xl font-semibold mb-3 text-mahmudabad-gold">Interdisciplinary Analysis</h3>
              <p>Bridging history and political science to understand both historical context and contemporary relevance.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Scholarship;
