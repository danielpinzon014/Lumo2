export type NodeType = 'trigger' | 'condition' | 'action';
export type ActionType = 
  | 'send-email'
  | 'add-tag'
  | 'remove-tag'
  | 'notification'
  | 'slack-message'
  | 'segment'
  | 'delay';

export interface NodeData {
  id: string;
  type: NodeType;
  actionType?: ActionType;
  title: string;
  description?: string;
  position?: { x: number; y: number };
  config?: {
    // Condition config
    field?: string;
    operator?: string;
    value?: string;
    
    // Action config
    template?: string;
    delay?: number;
    delayUnit?: 'minutes' | 'hours' | 'days';
    tags?: string;
    points?: number;
    channelId?: string;
    message?: string;
    segmentId?: string;
  };
}