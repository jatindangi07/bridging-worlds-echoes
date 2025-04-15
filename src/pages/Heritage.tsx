
import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Landmark, Book, Utensils, History, ArrowRight } from 'lucide-react';

const Heritage = () => {
  const historicalEvents = [
    {
      year: "1700s",
      title: "Origins",
      description: "Establishment of the Mahmudabad estate under the Nawabs of Awadh"
    },
    {
      year: "1857",
      title: "Rebellion",
      description: "Mahmudabad's involvement in the Indian Rebellion against British rule"
    },
    {
      year: "1900s",
      title: "Freedom Movement",
      description: "Active participation in India's independence movement"
    },
    {
      year: "1947",
      title: "Partition",
      description: "Challenges faced during Partition and the Raja's decision to remain in India"
    },
    {
      year: "1962-1979",
      title: "Exile Period",
      description: "Temporary exile of the family and subsequent return to Mahmudabad"
    },
    {
      year: "Present",
      title: "Revival",
      description: "Dr. Ali Khan Mahmudabad's efforts to preserve and revitalize the estate's heritage"
    }
  ];

  return (
    <Layout>
      <PageHeader 
        title="Heritage & Preservation"
        subtitle="Safeguarding the cultural and architectural legacy of Mahmudabad"
        backgroundImage="https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        className="text-white"
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="The Mahmudabad Legacy" 
                subtitle="A living testament to history, culture, and identity"
              />
              
              <div className="prose prose-blue max-w-none">
                <p className="lead text-lg text-mahmudabad-blue">
                  The Mahmudabad estate represents a unique confluence of history, architecture, and intellectual tradition that has shaped Dr. Mahmudabad's perspective and work.
                </p>
                
                <p>
                  Located in Sitapur district of Uttar Pradesh, the estate has been in the family for generations, serving as a center for cultural, political, and religious activities throughout its history. Its significance extends beyond its physical structures to encompass a rich legacy of scholarship, patronage, and civic engagement.
                </p>
                
                <p>
                  For Dr. Mahmudabad, the estate is not merely a historical inheritance but a living connection to the concepts of watan (homeland) and belonging that animate his scholarly work. It represents the complex interweaving of personal, cultural, and national identities that characterizes much of South Asian history.
                </p>
                
                <p>
                  Today, preserving this heritage involves not only maintaining architectural structures but also safeguarding intellectual traditions, cultural practices, and historical memory for future generations, connecting past wisdom with contemporary relevance.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-6">
                <Button asChild className="bg-mahmudabad-blue hover:bg-mahmudabad-blue/90">
                  <a href="#architectural">Explore Architecture</a>
                </Button>
                <Button asChild variant="outline" className="border-mahmudabad-blue text-mahmudabad-blue hover:bg-mahmudabad-blue/5">
                  <a href="#manuscripts">Discover Manuscripts</a>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Mahmudabad Palace" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 rounded-xl overflow-hidden shadow-xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Architectural detail" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-mahmudabad-cream">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Historical Timeline" 
            subtitle="Key moments in the history of Mahmudabad"
            align="center"
          />
          
          <div className="relative mt-12">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-mahmudabad-blue/20 transform md:-translate-x-1/2"></div>
            
            <div className="space-y-12">
              {historicalEvents.map((event, index) => (
                <div key={index} className="relative flex flex-col md:flex-row">
                  <div className={`flex md:w-1/2 ${index % 2 === 0 ? 'md:justify-end md:pr-8 order-1' : 'md:pl-8 order-1 md:order-2'}`}>
                    <div className={`bg-white p-5 rounded-lg shadow-md ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <h3 className="font-playfair text-xl font-semibold mb-1 text-mahmudabad-blue">
                        {event.title}
                      </h3>
                      <p className="text-sm text-mahmudabad-gold mb-2">{event.year}</p>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 ml-4 md:ml-0 w-4 h-4 bg-mahmudabad-gold rounded-full transform md:-translate-x-1/2 mt-6"></div>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-8 order-2 md:order-2' : 'md:pr-8 order-2 md:order-1'}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section id="architectural" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Architectural Heritage" 
            subtitle="Preserving the physical manifestations of history"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-10">
            <div className="lg:col-span-2">
              <div className="prose prose-blue max-w-none">
                <p>
                  The architectural heritage of Mahmudabad includes multiple structures that span different historical periods and reflect diverse influences, from Awadhi and Mughal to colonial and Indo-Saracenic styles.
                </p>
                
                <p>
                  The main palace complex (Qila Mahmudabad) showcases intricate architectural details, including ornate balconies, decorative arches, and elaborate jharokhas (overhanging enclosed balconies). These elements not only demonstrate exceptional craftsmanship but also reflect the cultural and artistic sensibilities of their time.
                </p>
                
                <p>
                  Beyond their aesthetic value, these structures embody historical narratives. Each building tells stories of the political, social, and cultural life of its era, from the grand durbar halls where political decisions were made to the intimate family spaces that witnessed personal histories unfold.
                </p>
                
                <p>
                  The conservation challenges are significant, requiring specialized expertise in traditional building techniques and materials. Dr. Mahmudabad has initiated several preservation projects that balance authentic restoration with sustainable adaptation, ensuring these structures remain both historically accurate and functionally relevant.
                </p>
              </div>
              
              <div className="mt-8">
                <Button asChild className="bg-mahmudabad-blue hover:bg-mahmudabad-blue/90">
                  <a href="#">
                    Virtual Tour <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            
            <div>
              <div className="bg-mahmudabad-cream p-6 rounded-lg mb-6">
                <Landmark className="h-10 w-10 text-mahmudabad-blue mb-4" />
                <h3 className="font-playfair text-xl font-semibold mb-3 text-mahmudabad-blue">Key Structures</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Qila Mahmudabad (Main Palace)</li>
                  <li>• Diwan Khana (Audience Hall)</li>
                  <li>• Imambara (Shia Congregation Hall)</li>
                  <li>• Mardana & Zenana Quarters</li>
                  <li>• Colonial-era Additions</li>
                  <li>• Landscaped Gardens</li>
                </ul>
              </div>
              
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Architectural detail of Mahmudabad" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="manuscripts" className="py-16 bg-mahmudabad-blue text-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Manuscript Collection" 
            subtitle="Preserving intellectual heritage through rare texts"
            className="text-white"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10 items-center">
            <div>
              <div className="prose prose-invert max-w-none">
                <p className="lead text-xl">
                  One of the most significant aspects of the Mahmudabad heritage is its extensive collection of manuscripts in multiple languages, representing centuries of intellectual engagement and cultural exchange.
                </p>
                
                <p>
                  The Raja of Mahmudabad Palace Library contains rare manuscripts in Persian, Arabic, Urdu, and other languages, covering subjects ranging from Islamic jurisprudence and mysticism to poetry, history, medicine, and astronomy. Many of these texts are unique copies or contain marginalia that offer invaluable insights into intellectual history.
                </p>
                
                <p>
                  Dr. Mahmudabad has initiated the "Raja of Mahmudabad Palace Library Project" to digitize and catalogue these manuscripts, making them accessible to scholars worldwide while ensuring their physical preservation. This project represents a bridge between historical preservation and contemporary scholarship, allowing these texts to continue contributing to intellectual discourse.
                </p>
                
                <p>
                  The manuscript collection informs much of Dr. Mahmudabad's own research, particularly his work on poetry as historical archive and the evolution of Muslim intellectual traditions in South Asia. Through these texts, he traces the development of concepts like watan (homeland) and the changing nature of political and cultural identity over time.
                </p>
              </div>
              
              <div className="mt-8">
                <Button asChild className="bg-mahmudabad-gold text-black hover:bg-mahmudabad-gold/90">
                  <a href="#">
                    Explore Digital Archive <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Ancient manuscript" 
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Library collection" 
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden col-span-2">
                <img 
                  src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Manuscript preservation work" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Cultural Preservation Initiatives" 
            subtitle="Safeguarding intangible heritage for future generations"
          />
          
          <Tabs defaultValue="cuisine" className="w-full mt-10">
            <TabsList className="w-full max-w-lg mx-auto">
              <TabsTrigger value="cuisine" className="flex-1">
                <div className="flex items-center justify-center">
                  <Utensils className="h-4 w-4 mr-2" />
                  <span>Cuisine</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="literature" className="flex-1">
                <div className="flex items-center justify-center">
                  <Book className="h-4 w-4 mr-2" />
                  <span>Literature</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="oral-histories" className="flex-1">
                <div className="flex items-center justify-center">
                  <History className="h-4 w-4 mr-2" />
                  <span>Oral Histories</span>
                </div>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="cuisine" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2">
                  <h3 className="font-playfair text-2xl font-semibold mb-4 text-mahmudabad-blue">
                    Preserving Awadhi Culinary Traditions
                  </h3>
                  
                  <div className="prose prose-blue max-w-none">
                    <p>
                      The distinctive cuisine of Awadh, with its refined techniques and complex flavor profiles, represents a significant aspect of cultural heritage that Dr. Mahmudabad is committed to preserving.
                    </p>
                    
                    <p>
                      The kitchens of Mahmudabad have historically been known for their unique preparations that blend Persian, Central Asian, and local influences. Many of these recipes have been passed down through generations, preserved within families who have long been associated with the estate.
                    </p>
                    
                    <p>
                      Dr. Mahmudabad's culinary preservation initiative includes documenting traditional recipes, techniques, and the cultural contexts in which they developed. This work captures not just ingredient lists and cooking methods but the stories, occasions, and historical developments that shaped this culinary tradition.
                    </p>
                    
                    <p>
                      Through collaborations with chefs, food historians, and cultural organizations, this initiative aims to ensure that Awadhi cuisine remains a living tradition, adapting to contemporary contexts while maintaining its essential character and historical integrity.
                    </p>
                  </div>
                  
                  <div className="mt-6">
                    <Button asChild variant="outline" className="border-mahmudabad-blue text-mahmudabad-blue hover:bg-mahmudabad-blue/5">
                      <a href="#">
                        Explore Recipe Archive <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                
                <div>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Traditional Awadhi cuisine" 
                      className="w-full h-auto"
                    />
                  </div>
                  
                  <div className="mt-6 bg-mahmudabad-cream p-5 rounded-lg">
                    <h4 className="font-playfair text-lg font-semibold mb-3 text-mahmudabad-blue">Signature Dishes</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Dum Pukht Biryani</li>
                      <li>• Galawat ke Kebab</li>
                      <li>• Sheermal</li>
                      <li>• Nihari</li>
                      <li>• Zarda</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="literature" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2">
                  <h3 className="font-playfair text-2xl font-semibold mb-4 text-mahmudabad-blue">
                    Literary Heritage Preservation
                  </h3>
                  
                  <div className="prose prose-blue max-w-none">
                    <p>
                      Mahmudabad has a rich literary history, having been a center for poetic gatherings (mushairas) and intellectual exchange that contributed significantly to Urdu and Persian literary traditions in India.
                    </p>
                    
                    <p>
                      Dr. Mahmudabad's work in this area includes collecting and preserving poetry collections, literary correspondence, and accounts of notable mushairas held at the estate. This material provides valuable insights into the development of literary movements and the social and political contexts in which they flourished.
                    </p>
                    
                    <p>
                      The literary preservation initiative extends beyond archiving to include revival, with Dr. Mahmudabad organizing contemporary mushairas and literary events that continue the tradition of Mahmudabad as a space for creative expression and intellectual engagement.
                    </p>
                    
                    <p>
                      This work directly informs Dr. Mahmudabad's academic research on poetry as historical archive, demonstrating how literary expression captures aspects of historical experience that might be absent from conventional historical sources.
                    </p>
                  </div>
                  
                  <div className="mt-6">
                    <Button asChild variant="outline" className="border-mahmudabad-blue text-mahmudabad-blue hover:bg-mahmudabad-blue/5">
                      <a href="#">
                        Explore Literary Collection <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                
                <div>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Literary manuscript" 
                      className="w-full h-auto"
                    />
                  </div>
                  
                  <div className="mt-6 bg-mahmudabad-cream p-5 rounded-lg">
                    <h4 className="font-playfair text-lg font-semibold mb-3 text-mahmudabad-blue">Notable Poets Associated with Mahmudabad</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Mir Taqi Mir</li>
                      <li>• Mirza Ghalib</li>
                      <li>• Allama Iqbal</li>
                      <li>• Josh Malihabadi</li>
                      <li>• Jigar Moradabadi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="oral-histories" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2">
                  <h3 className="font-playfair text-2xl font-semibold mb-4 text-mahmudabad-blue">
                    Collecting Oral Histories
                  </h3>
                  
                  <div className="prose prose-blue max-w-none">
                    <p>
                      The Oral History Project represents a vital component of Dr. Mahmudabad's heritage preservation work, capturing memories, perspectives, and lived experiences that might otherwise be lost to time.
                    </p>
                    
                    <p>
                      This initiative involves recording interviews with elderly residents of Mahmudabad and surrounding areas, family members, long-serving staff, and others with direct connections to the estate's history. These narratives provide invaluable insights into daily life, social customs, historical events, and personal stories.
                    </p>
                    
                    <p>
                      The project is particularly focused on recording accounts of the partition period, the exile and return of the family, and the transformations in local society over the 20th century. These oral histories complement written documents and official records, often providing perspectives and details absent from formal historical sources.
                    </p>
                    
                    <p>
                      Beyond preservation, these collected narratives serve educational purposes, providing material for researchers, documentarians, and educational programs that seek to understand the human dimensions of historical change in South Asia.
                    </p>
                  </div>
                  
                  <div className="mt-6">
                    <Button asChild variant="outline" className="border-mahmudabad-blue text-mahmudabad-blue hover:bg-mahmudabad-blue/5">
                      <a href="#">
                        Listen to Oral Histories <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                
                <div>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Oral history recording session" 
                      className="w-full h-auto"
                    />
                  </div>
                  
                  <div className="mt-6 bg-mahmudabad-cream p-5 rounded-lg">
                    <h4 className="font-playfair text-lg font-semibold mb-3 text-mahmudabad-blue">Key Themes in Oral Histories</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Pre-Independence Social Life</li>
                      <li>• Partition Experiences</li>
                      <li>• Cultural Traditions and Festivals</li>
                      <li>• Changes in Local Governance</li>
                      <li>• Craft and Agricultural Practices</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <section className="py-16 bg-mahmudabad-terracotta text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Support Our Preservation Efforts</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Join us in safeguarding this unique cultural and architectural heritage for future generations
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-mahmudabad-terracotta hover:bg-gray-100">
              <a href="#">Donate</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="#">Volunteer</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Heritage;
