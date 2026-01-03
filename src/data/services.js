import { TrendingUp, BarChart3, Database, Calculator, Cpu, BrainCircuit } from 'lucide-react';

export const services = [
    {
        id: 'value-creation-analytics',
        title: 'Value Creation Analytics',
        icon: TrendingUp,
        description: 'Unlock hidden revenue streams and optimize profitability through advanced data modeling.',
        solutionOverview: 'We deploy advanced data mining techniques to analyze your entire transaction history and customer behavior. By integrating disparate data sources, we build sophisticated models that isolate key drivers of profitability and customer retention, enabling you to pull the specific levers that maximize margins.',
        pain: [
            'Revenue leakage due to pricing inefficiencies',
            'Inability to accurately track customer profitability',
            'Marketing spend distributed without ROI visibility',
            'Decisions driven by gut-feeling rather than data'
        ],
        value: [
            'Identified >$5M in immediate pricing opportunities',
            'Customer lifetime value (CLV) and churn modeling',
            'Optimized marketing mix reducing CAC by 20%',
            'Data-driven culture transformation'
        ]
    },
    {
        id: 'business-intelligence-reporting',
        title: 'Business Intelligence & Reporting',
        icon: BarChart3,
        description: 'Transform raw data into actionable insights with automated, real-time dashboards.',
        solutionOverview: 'We replace static spreadsheets with dynamic, automated BI ecosystems. Our team connects your ERP, CRM, and marketing platforms into a centralized warehouse, feeding real-time dashboards that provide every stakeholder—from the C-suite to operational managers—with immediate, trustworthy insights.',
        pain: [
            'Manual, error-prone Excel reporting cycles',
            'Disparate data sources leading to conflicting numbers',
            'Delay in monthly close and operational reporting',
            'Lack of visibility into daily KPIs'
        ],
        value: [
            'Automated PowerBI / Tableau dashboards',
            'Single Source of Truth (SSOT) across the organization',
            'Real-time KPI monitoring and alerting',
            'Self-service analytics empowering business users'
        ]
    },
    {
        id: 'enterprise-data-warehouse',
        title: 'Enterprise Data Warehouse Solutions',
        icon: Database,
        description: 'Build a robust, scalable foundation for all your data needs using modern cloud architecture.',
        solutionOverview: 'We architect and build a future-proof data foundation using scalable cloud platforms like Snowflake, Azure, or BigQuery. We handle the end-to-end extraction, transformation, and loading (ETL/ELT) processes to ensure your data is clean, organized, and readily accessible for any analytical workload.',
        pain: [
            'Slow query performance impacting decision speed',
            'Data silos across sales, finance, and operations',
            'Scalability issues with legacy on-premise databases',
            'High maintenance costs of traditional infrastructure'
        ],
        value: [
            'Modern cloud data warehouse (Snowflake / BigQuery)',
            'Unified data model integrating all business functions',
            'Elastic scalability for future growth',
            'Reduced total cost of ownership (TCO)'
        ]
    },
    {
        id: 'foundational-accounting-fpa',
        title: 'Foundational Accounting and FP&A Enhancement',
        icon: Calculator,
        description: 'Streamline your financial operations and gain strategic clarity with robust FP&A frameworks.',
        solutionOverview: 'We rebuild your financial foundation from the ground up, streamlining core accounting processes and implementing robust Financial Planning & Analysis (FP&A) frameworks. Our approach ensures your financial data is not just compliant, but a strategic asset that drives budget accuracy and long-term capital allocation.',
        pain: [
            'Chart of accounts not aligned with business operations',
            'Month-end close taking >15 days',
            'Lack of visibility into cash flow variability',
            'Manual reconciliation processes prone to errors'
        ],
        value: [
            'Streamlined 5-day month-end close process',
            'Automated 13-week rolling cash flow forecasts',
            'Restructured COA for granular profitability analysis',
            'Implementation of modern planning tools'
        ]
    },
    {
        id: 'data-analytics-technology',
        title: 'Data & Analytics Technology',
        icon: Cpu,
        description: 'Modernize your tech stack to leverage the latest in cloud computing and big data.',
        solutionOverview: 'We evaluate your current technical landscape and execute a modernization strategy that eliminates technical debt. Whether it\'s migrating from legacy on-prem systems to the cloud or integrating best-in-class SaaS tools, we design a cohesive stack that supports agility and innovation.',
        pain: [
            'Outdated tech stack limiting innovation capabilities',
            'Vendor lock-in with escalating license costs',
            'Inability to handle unstructured or streaming data',
            'Fragmented tools creating integration nightmares'
        ],
        value: [
            'Modern stack migration and architecture planning',
            'Cloud-native resource optimization',
            'Seamless integration of best-of-breed tools',
            'Future-proof technical infrastructure'
        ]
    },
    {
        id: 'ai-predictive-modeling',
        title: 'AI & Predictive Modeling',
        icon: BrainCircuit,
        description: 'Move beyond hindsight. Use AI to predict future trends and automate complex decisions.',
        solutionOverview: 'We take your data journey to the next level by developing custom machine learning models tailored to your specific business problems. From scoping the use case to training and deploying the model, we operationalize AI to automate complex decisions and predict future market outcomes with high precision.',
        pain: [
            'Reactive instead of proactive decision making',
            'Vast amounts of historical data going unused',
            'Manual forecasting processes prone to bias',
            'Inability to detect anomalies in real-time'
        ],
        value: [
            'Predictive churn and demand forecasting models',
            'Automated anomaly detection systems',
            '95%+ accuracy in operational forecasts',
            'AI-driven process automation and efficiency'
        ]
    }
];
