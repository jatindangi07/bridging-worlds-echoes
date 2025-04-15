
import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import SectionTitle from '@/components/SectionTitle';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Globe, GraduationCap, Languages } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <PageHeader 
        title="About Dr. Ali Khan Mahmudabad"
        subtitle="Historian, Political Scientist, Public Intellectual, and Civic Leader"
        backgroundImage="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        className="text-white"
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="aspect-square overflow-hidden rounded-xl mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Dr. Ali Khan Mahmudabad" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-mahmudabad-blue mr-3" />
                    <div>
                      <h3 className="text-sm font-medium">Academic Position</h3>
                      <p className="text-muted-foreground">Associate Professor, Ashoka University</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <GraduationCap className="h-5 w-5 text-mahmudabad-blue mr-3" />
                    <div>
                      <h3 className="text-sm font-medium">Education</h3>
                      <p className="text-muted-foreground">Ph.D., University of Cambridge</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-mahmudabad-blue mr-3" />
                    <div>
                      <h3 className="text-sm font-medium">Areas of Expertise</h3>
                      <p className="text-muted-foreground">Muslim South Asia, Intellectual History, Political Identity</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Languages className="h-5 w-5 text-mahmudabad-blue mr-3" />
                    <div>
                      <h3 className="text-sm font-medium">Languages</h3>
                      <p className="text-muted-foreground">English, Urdu, Hindi, Persian, Arabic</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <SectionTitle 
                title="Beyond Biography"
                subtitle="A multifaceted journey through academia, politics, and cultural preservation"
              />
              
              <div className="prose prose-blue max-w-none">
                <p className="lead text-lg text-mahmudabad-blue">
                  Dr. Ali Khan Mahmudabad is a historian, political scientist, public intellectual, and civic leader whose work bridges academia and public engagement, focusing on the complex interplay of history, identity, and politics in South Asia.
                </p>
                
                <p>
                  As an Associate Professor at Ashoka University with a joint appointment in History and Political Science, Dr. Mahmudabad's research explores the intellectual, cultural, and political history of Muslims in South Asia from the mid-nineteenth century to the present. His interdisciplinary approach combines historical research with political analysis, using multilingual primary sources to uncover narratives and perspectives often overlooked in conventional historical accounts.
                </p>
                
                <p>
                  Beyond his academic work, Dr. Mahmudabad is actively engaged in public discourse as a columnist and commentator on contemporary politics, history, and identity in India. His analysis appears regularly in publications like The Indian Express, The Wire, and Inquilab, and he is frequently invited to speak at universities, think tanks, and media outlets worldwide.
                </p>
                
                <p>
                  Dr. Mahmudabad also leads several initiatives focused on cultural preservation, educational advancement, and interfaith dialogue. As the custodian of the Mahmudabad estate, he works to preserve its architectural heritage and extensive manuscript collection, while his Shoulder 2 Shoulder Foundation promotes understanding and cooperation across religious and cultural divides.
                </p>
              </div>
              
              <Tabs defaultValue="heritage" className="mt-12">
                <TabsList className="w-full border-b rounded-none justify-start">
                  <TabsTrigger value="heritage" className="rounded-b-none">Heritage & Formation</TabsTrigger>
                  <TabsTrigger value="education" className="rounded-b-none">Educational Journey</TabsTrigger>
                  <TabsTrigger value="approach" className="rounded-b-none">Interdisciplinary Approach</TabsTrigger>
                </TabsList>
                
                <TabsContent value="heritage" className="pt-6">
                  <h3 className="font-playfair text-2xl font-semibold mb-4 text-mahmudabad-blue">Heritage & Formation</h3>
                  
                  <p className="mb-4">
                    Dr. Mahmudabad's intellectual journey is inseparable from his heritage as a descendant of the Rajas of Mahmudabad, a family with deep roots in the history and culture of Awadh. Growing up amid the architectural splendor and intellectual riches of the Mahmudabad estate—with its vast libraries of Persian, Arabic, and Urdu manuscripts—provided him with a unique vantage point from which to approach questions of history, identity, and belonging.
                  </p>
                  
                  <p className="mb-4">
                    The complex history of the estate itself—from its prominence in pre-colonial India through the challenges of partition and post-independence politics—mirrors many of the themes that now animate Dr. Mahmudabad's scholarly work, particularly the evolution of concepts like watan (homeland) and the negotiation of multiple identities.
                  </p>
                  
                  <p>
                    His upbringing in a multi-faith household further shaped his perspective on religious plurality and coexistence. This background has informed both his academic research on interfaith relations in South Asia and his practical engagement with initiatives promoting dialogue and understanding across religious boundaries.
                  </p>
                </TabsContent>
                
                <TabsContent value="education" className="pt-6">
                  <h3 className="font-playfair text-2xl font-semibold mb-4 text-mahmudabad-blue">Transnational Educational Journey</h3>
                  
                  <p className="mb-4">
                    Dr. Mahmudabad's education spans continents and traditions, reflecting his commitment to bridging diverse intellectual worlds. After early education in India, he pursued undergraduate and graduate studies at the School of Oriental and African Studies (SOAS) and the University of Cambridge in the United Kingdom, where he received his Ph.D. in History.
                  </p>
                  
                  <p className="mb-4">
                    His academic training continued with additional study in the United States and a period of immersion in classical Islamic education in Syria, where he deepened his understanding of Arabic language and literature. This combination of Western academic methods and traditional Islamic scholarship gives Dr. Mahmudabad a unique perspective on the history and culture of Muslim South Asia.
                  </p>
                  
                  <p>
                    Dr. Mahmudabad's multilingual fluency—including English, Urdu, Hindi, Persian, and Arabic—is not merely an academic asset but an essential tool that allows him to access and interpret primary sources across cultural and linguistic boundaries, bringing previously marginalized voices and perspectives into scholarly and public discourse.
                  </p>
                </TabsContent>
                
                <TabsContent value="approach" className="pt-6">
                  <h3 className="font-playfair text-2xl font-semibold mb-4 text-mahmudabad-blue">Interdisciplinary Approach</h3>
                  
                  <p className="mb-4">
                    Dr. Mahmudabad's work exemplifies the value of interdisciplinary approaches to complex historical and political questions. His joint appointment in History and Political Science at Ashoka University reflects his commitment to understanding both the historical roots and contemporary implications of the issues he studies.
                  </p>
                  
                  <p className="mb-4">
                    A hallmark of his scholarly methodology is his innovative use of poetry as a historical archive. In his book <em>Poetry of Belonging: Muslim Imaginings of India 1850-1950</em>, he analyzes Urdu poetry not merely as literary expression but as a vital historical source that captures emotional and intellectual responses to political change in ways often missed by conventional historical sources.
                  </p>
                  
                  <p>
                    This interdisciplinary orientation extends to his public engagement as well. Whether writing newspaper columns, delivering lectures, or participating in policy discussions, Dr. Mahmudabad brings historical depth to contemporary debates and connects scholarly insights to pressing social and political issues, exemplifying the role of the engaged scholar in public life.
                  </p>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="py-16 bg-mahmudabad-cream">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Key Milestones" 
            subtitle="A journey through academia, public engagement, and civic leadership"
            align="center"
          />
          
          <div className="relative mt-12">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 ml-4 md:ml-0 w-0.5 h-full bg-mahmudabad-blue/20 transform md:-translate-x-1/2"></div>
            
            <div className="space-y-12">
              {/* Timeline item 1 */}
              <div className="relative flex flex-col md:flex-row items-start">
                <div className="flex md:justify-end md:w-1/2 md:pr-8 order-2 md:order-1">
                  <div className="bg-white p-5 rounded-lg shadow-md md:text-right">
                    <h3 className="font-playfair text-xl font-semibold mb-1 text-mahmudabad-blue">Education at Cambridge</h3>
                    <p className="text-sm text-mahmudabad-gold mb-2">2008 - 2013</p>
                    <p className="text-muted-foreground">Completed Ph.D. in History at the University of Cambridge, focusing on Muslim intellectual history in South Asia.</p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 ml-4 md:ml-0 w-4 h-4 bg-mahmudabad-gold rounded-full transform md:-translate-x-1/2 mt-6 md:mt-8"></div>
                <div className="md:w-1/2 md:pl-8 order-1 md:order-2"></div>
              </div>
              
              {/* Timeline item 2 */}
              <div className="relative flex flex-col md:flex-row items-start">
                <div className="md:w-1/2 md:pr-8 order-2 md:order-1"></div>
                <div className="absolute left-0 md:left-1/2 ml-4 md:ml-0 w-4 h-4 bg-mahmudabad-gold rounded-full transform md:-translate-x-1/2 mt-6 md:mt-8"></div>
                <div className="flex md:w-1/2 md:pl-8 order-1 md:order-2">
                  <div className="bg-white p-5 rounded-lg shadow-md">
                    <h3 className="font-playfair text-xl font-semibold mb-1 text-mahmudabad-blue">Joined Ashoka University</h3>
                    <p className="text-sm text-mahmudabad-gold mb-2">2016</p>
                    <p className="text-muted-foreground">Appointed as Assistant Professor with a joint appointment in History and Political Science.</p>
                  </div>
                </div>
              </div>
              
              {/* Timeline item 3 */}
              <div className="relative flex flex-col md:flex-row items-start">
                <div className="flex md:justify-end md:w-1/2 md:pr-8 order-2 md:order-1">
                  <div className="bg-white p-5 rounded-lg shadow-md md:text-right">
                    <h3 className="font-playfair text-xl font-semibold mb-1 text-mahmudabad-blue">Publication of "Poetry of Belonging"</h3>
                    <p className="text-sm text-mahmudabad-gold mb-2">2020</p>
                    <p className="text-muted-foreground">Released groundbreaking book on Muslim imaginings of India through Urdu poetry, published by Oxford University Press.</p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 ml-4 md:ml-0 w-4 h-4 bg-mahmudabad-gold rounded-full transform md:-translate-x-1/2 mt-6 md:mt-8"></div>
                <div className="md:w-1/2 md:pl-8 order-1 md:order-2"></div>
              </div>
              
              {/* Timeline item 4 */}
              <div className="relative flex flex-col md:flex-row items-start">
                <div className="md:w-1/2 md:pr-8 order-2 md:order-1"></div>
                <div className="absolute left-0 md:left-1/2 ml-4 md:ml-0 w-4 h-4 bg-mahmudabad-gold rounded-full transform md:-translate-x-1/2 mt-6 md:mt-8"></div>
                <div className="flex md:w-1/2 md:pl-8 order-1 md:order-2">
                  <div className="bg-white p-5 rounded-lg shadow-md">
                    <h3 className="font-playfair text-xl font-semibold mb-1 text-mahmudabad-blue">Established Shoulder 2 Shoulder Foundation</h3>
                    <p className="text-sm text-mahmudabad-gold mb-2">2022</p>
                    <p className="text-muted-foreground">Founded organization dedicated to promoting interfaith dialogue and community cooperation across religious boundaries.</p>
                  </div>
                </div>
              </div>
              
              {/* Timeline item 5 */}
              <div className="relative flex flex-col md:flex-row items-start">
                <div className="flex md:justify-end md:w-1/2 md:pr-8 order-2 md:order-1">
                  <div className="bg-white p-5 rounded-lg shadow-md md:text-right">
                    <h3 className="font-playfair text-xl font-semibold mb-1 text-mahmudabad-blue">Madrassatul Waizeen Revival</h3>
                    <p className="text-sm text-mahmudabad-gold mb-2">2023 - Present</p>
                    <p className="text-muted-foreground">Leading the revitalization of historic institution into a modern center for Islamic studies and intercultural dialogue.</p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 ml-4 md:ml-0 w-4 h-4 bg-mahmudabad-gold rounded-full transform md:-translate-x-1/2 mt-6 md:mt-8"></div>
                <div className="md:w-1/2 md:pl-8 order-1 md:order-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
