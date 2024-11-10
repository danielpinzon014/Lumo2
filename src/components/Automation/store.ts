import { create } from 'zustand';
import { Node, Edge } from 'reactflow';

interface FlowState {
  nodes: Node[];
  edges: Edge[];
  setNodes: (nodes: Node[]) => void;
  setEdges: (edges: Edge[]) => void;
  addNode: (node: Node) => void;
  updateNode: (nodeId: string, data: any) => void;
  removeNode: (nodeId: string) => void;
  addEdge: (edge: Edge) => void;
  removeEdge: (edgeId: string) => void;
}

export const useFlowStore = create<FlowState>((set) => ({
  nodes: [],
  edges: [],
  setNodes: (nodes) => set({ nodes }),
  setEdges: (edges) => set({ edges }),
  addNode: (node) =>
    set((state) => ({ nodes: [...state.nodes, node] })),
  updateNode: (nodeId, data) =>
    set((state) => ({
      nodes: state.nodes.map((node) =>
        node.id === nodeId ? { ...node, data: { ...node.data, ...data } } : node
      ),
    })),
  removeNode: (nodeId) =>
    set((state) => ({
      nodes: state.nodes.filter((node) => node.id !== nodeId),
      edges: state.edges.filter(
        (edge) => edge.source !== nodeId && edge.target !== nodeId
      ),
    })),
  addEdge: (edge) =>
    set((state) => ({ edges: [...state.edges, edge] })),
  removeEdge: (edgeId) =>
    set((state) => ({
      edges: state.edges.filter((edge) => edge.id !== edgeId),
    })),
}));