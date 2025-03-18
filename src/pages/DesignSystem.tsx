import React from 'react';
import { ArrowLeft, Mail, Search, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { 
  Badge, 
  Button, 
  Card, 
  Container, 
  Grid, 
  Input, 
  Text 
} from '../components/ui';
import '../styles/design-system.css';

export default function DesignSystem() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Design System"
        description="Nestor AI design system components and guidelines"
        keywords="design system, UI components, style guide"
      />
      
      <header className="bg-surface shadow-sm">
        <Container>
          <div className="py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft size={20} />
              <span className="font-semibold">Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold">Nestor AI Design System</h1>
            <div className="w-20"></div>
          </div>
        </Container>
      </header>
      
      <main className="py-8">
        <Container>
          <section className="mb-12">
            <Text variant="h2" className="mb-6">Typography</Text>
            <Card className="space-y-6">
              <div>
                <Text variant="h1">Heading 1</Text>
                <Text variant="body-sm" color="tertiary">font-size: var(--font-size-4xl)</Text>
              </div>
              <div>
                <Text variant="h2">Heading 2</Text>
                <Text variant="body-sm" color="tertiary">font-size: var(--font-size-3xl)</Text>
              </div>
              <div>
                <Text variant="h3">Heading 3</Text>
                <Text variant="body-sm" color="tertiary">font-size: var(--font-size-2xl)</Text>
              </div>
              <div>
                <Text variant="h4">Heading 4</Text>
                <Text variant="body-sm" color="tertiary">font-size: var(--font-size-xl)</Text>
              </div>
              <div>
                <Text variant="h5">Heading 5</Text>
                <Text variant="body-sm" color="tertiary">font-size: var(--font-size-lg)</Text>
              </div>
              <div>
                <Text variant="h6">Heading 6</Text>
                <Text variant="body-sm" color="tertiary">font-size: var(--font-size-md)</Text>
              </div>
              <div>
                <Text variant="body">Body Text</Text>
                <Text variant="body-sm" color="tertiary">font-size: var(--font-size-md)</Text>
              </div>
              <div>
                <Text variant="body-sm">Small Body Text</Text>
                <Text variant="body-sm" color="tertiary">font-size: var(--font-size-sm)</Text>
              </div>
              <div>
                <Text variant="caption">Caption Text</Text>
                <Text variant="body-sm" color="tertiary">font-size: var(--font-size-xs)</Text>
              </div>
            </Card>
          </section>
          
          <section className="mb-12">
            <Text variant="h2" className="mb-6">Colors</Text>
            <Grid columns={2} columnsMd={3} columnsLg={4} gap="md">
              <ColorSwatch name="Primary" color="var(--color-primary)" textColor="white" />
              <ColorSwatch name="Primary Light" color="var(--color-primary-light)" textColor="black" />
              <ColorSwatch name="Primary Dark" color="var(--color-primary-dark)" textColor="white" />
              <ColorSwatch name="Secondary" color="var(--color-secondary)" textColor="white" />
              <ColorSwatch name="Secondary Light" color="var(--color-secondary-light)" textColor="black" />
              <ColorSwatch name="Secondary Dark" color="var(--color-secondary-dark)" textColor="white" />
              <ColorSwatch name="Accent" color="var(--color-accent)" textColor="white" />
              <ColorSwatch name="Accent Light" color="var(--color-accent-light)" textColor="black" />
              <ColorSwatch name="Accent Dark" color="var(--color-accent-dark)" textColor="white" />
              <ColorSwatch name="Background" color="var(--color-background)" textColor="black" />
              <ColorSwatch name="Surface" color="var(--color-surface)" textColor="black" />
              <ColorSwatch name="Text Primary" color="var(--color-text-primary)" textColor="white" />
              <ColorSwatch name="Text Secondary" color="var(--color-text-secondary)" textColor="white" />
              <ColorSwatch name="Text Tertiary" color="var(--color-text-tertiary)" textColor="white" />
            </Grid>
          </section>
          
          <section className="mb-12">
            <Text variant="h2" className="mb-6">Buttons</Text>
            <Card className="space-y-8">
              <div>
                <Text variant="h4" className="mb-4">Button Variants</Text>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="accent">Accent</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
              </div>
              
              <div>
                <Text variant="h4" className="mb-4">Button Sizes</Text>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>
              
              <div>
                <Text variant="h4" className="mb-4">Button States</Text>
                <div className="flex flex-wrap gap-4">
                  <Button>Normal</Button>
                  <Button disabled>Disabled</Button>
                  <Button isLoading>Loading</Button>
                </div>
              </div>
              
              <div>
                <Text variant="h4" className="mb-4">Button with Icons</Text>
                <div className="flex flex-wrap gap-4">
                  <Button leftIcon={<Search size={16} />}>Search</Button>
                  <Button rightIcon={<ChevronRight size={16} />}>Next</Button>
                  <Button leftIcon={<Mail size={16} />} rightIcon={<ChevronRight size={16} />}>Send Email</Button>
                </div>
              </div>
            </Card>
          </section>
          
          <section className="mb-12">
            <Text variant="h2" className="mb-6">Cards</Text>
            <Grid columns={1} columnsMd={3} gap="md">
              <Card variant="default" className="h-40 flex items-center justify-center">
                <Text>Default Card</Text>
              </Card>
              <Card variant="outlined" className="h-40 flex items-center justify-center">
                <Text>Outlined Card</Text>
              </Card>
              <Card variant="elevated" className="h-40 flex items-center justify-center">
                <Text>Elevated Card</Text>
              </Card>
            </Grid>
          </section>
          
          <section className="mb-12">
            <Text variant="h2" className="mb-6">Badges</Text>
            <Card className="space-y-6">
              <div>
                <Text variant="h4" className="mb-4">Badge Variants</Text>
                <div className="flex flex-wrap gap-4">
                  <Badge variant="primary">Primary</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="accent">Accent</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="error">Error</Badge>
                  <Badge variant="info">Info</Badge>
                </div>
              </div>
              
              <div>
                <Text variant="h4" className="mb-4">Badge Sizes</Text>
                <div className="flex flex-wrap items-center gap-4">
                  <Badge size="sm">Small</Badge>
                  <Badge size="md">Medium</Badge>
                  <Badge size="lg">Large</Badge>
                </div>
              </div>
              
              <div>
                <Text variant="h4" className="mb-4">Rounded Badges</Text>
                <div className="flex flex-wrap gap-4">
                  <Badge rounded>Rounded</Badge>
                  <Badge variant="secondary" rounded>Rounded</Badge>
                  <Badge variant="accent" rounded>Rounded</Badge>
                </div>
              </div>
            </Card>
          </section>
          
          <section className="mb-12">
            <Text variant="h2" className="mb-6">Inputs</Text>
            <Card className="space-y-6">
              <div>
                <Text variant="h4" className="mb-4">Basic Input</Text>
                <Input label="Name" placeholder="Enter your name" />
              </div>
              
              <div>
                <Text variant="h4" className="mb-4">Input with Helper Text</Text>
                <Input 
                  label="Email" 
                  type="email" 
                  placeholder="Enter your email" 
                  helperText="We'll never share your email with anyone else."
                />
              </div>
              
              <div>
                <Text variant="h4" className="mb-4">Input with Error</Text>
                <Input 
                  label="Password" 
                  type="password" 
                  placeholder="Enter your password" 
                  error="Password must be at least 8 characters"
                />
              </div>
              
              <div>
                <Text variant="h4" className="mb-4">Input with Icons</Text>
                <div className="space-y-4">
                  <Input 
                    label="Search" 
                    placeholder="Search..." 
                    leftIcon={<Search size={16} />}
                  />
                  <Input 
                    label="Email" 
                    type="email" 
                    placeholder="Enter your email" 
                    leftIcon={<Mail size={16} />}
                  />
                </div>
              </div>
            </Card>
          </section>
          
          <section className="mb-12">
            <Text variant="h2" className="mb-6">Grid Layout</Text>
            <Card className="p-0 overflow-hidden">
              <div className="p-4 bg-gray-100">
                <Text variant="h4">1 Column (default)</Text>
              </div>
              <Grid columns={1} gap="sm" className="p-4">
                <div className="bg-primary-light p-4 text-center rounded">Item 1</div>
                <div className="bg-primary-light p-4 text-center rounded">Item 2</div>
                <div className="bg-primary-light p-4 text-center rounded">Item 3</div>
              </Grid>
              
              <div className="p-4 bg-gray-100">
                <Text variant="h4">2 Columns</Text>
              </div>
              <Grid columns={2} gap="sm" className="p-4">
                <div className="bg-secondary-light p-4 text-center rounded">Item 1</div>
                <div className="bg-secondary-light p-4 text-center rounded">Item 2</div>
                <div className="bg-secondary-light p-4 text-center rounded">Item 3</div>
                <div className="bg-secondary-light p-4 text-center rounded">Item 4</div>
              </Grid>
              
              <div className="p-4 bg-gray-100">
                <Text variant="h4">3 Columns</Text>
              </div>
              <Grid columns={3} gap="sm" className="p-4">
                <div className="bg-accent-light p-4 text-center rounded">Item 1</div>
                <div className="bg-accent-light p-4 text-center rounded">Item 2</div>
                <div className="bg-accent-light p-4 text-center rounded">Item 3</div>
                <div className="bg-accent-light p-4 text-center rounded">Item 4</div>
                <div className="bg-accent-light p-4 text-center rounded">Item 5</div>
                <div className="bg-accent-light p-4 text-center rounded">Item 6</div>
              </Grid>
              
              <div className="p-4 bg-gray-100">
                <Text variant="h4">Responsive Grid</Text>
              </div>
              <Grid 
                columns={1} 
                columnsSm={2} 
                columnsMd={3} 
                columnsLg={4} 
                gap="sm" 
                className="p-4"
              >
                <div className="bg-primary-light p-4 text-center rounded">Item 1</div>
                <div className="bg-primary-light p-4 text-center rounded">Item 2</div>
                <div className="bg-primary-light p-4 text-center rounded">Item 3</div>
                <div className="bg-primary-light p-4 text-center rounded">Item 4</div>
                <div className="bg-primary-light p-4 text-center rounded">Item 5</div>
                <div className="bg-primary-light p-4 text-center rounded">Item 6</div>
                <div className="bg-primary-light p-4 text-center rounded">Item 7</div>
                <div className="bg-primary-light p-4 text-center rounded">Item 8</div>
              </Grid>
            </Card>
          </section>
        </Container>
      </main>
    </div>
  );
}

// Helper component for color swatches
function ColorSwatch({ name, color, textColor }: { name: string; color: string; textColor: 'black' | 'white' }) {
  const textColorClass = textColor === 'black' ? 'color-swatch-text-black' : 'color-swatch-text-white';
  
  return (
    <div className="flex flex-col">
      <div 
        className={`color-swatch ${textColorClass} color-swatch-${color.replace('#', '')}`}
      >
        <span className="color-swatch-code">{color}</span>
      </div>
      <Text variant="body-sm" className="mt-1">{name}</Text>
    </div>
  );
}
